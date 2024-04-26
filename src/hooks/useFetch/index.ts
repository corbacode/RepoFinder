import { useState, useEffect, useMemo } from "react";

import CONFIG from "@/config";
const DefaultAPI = CONFIG.APP.API_URL;

export type FetchTypes<T> = {
  loading: boolean;
  error: Error | null;
  data: T | null;
};

type Query = Record<string, string> | {};

/**
 * Custom React hook for fetching data from an API endpoint.
 * @template T - The type of data fetched from the API.
 * @param {string} url - The endpoint URL to fetch data from.
 * @param {Record<string, string> | {}} [queryParams] - Optional query parameters for the request.
 * @param {string} [API] - The base API URL. Defaults to the value provided in CONFIG.APP.API_URL.
 * @returns {{
 *   data: T | null; // The fetched data, null if not yet loaded or if an error occurred.
 *   loading: boolean; // Boolean indicating if the data is being loaded.
 *   error: Error | null; // Any error that occurred during the fetch process, null if no error.
 * }}
 */
export default function useFetch<T>(
  url: string,
  queryParams?: Query,
  API: string = DefaultAPI
): FetchTypes<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const queryString = queryParams
    ? new URLSearchParams(queryParams).toString()
    : "";

  // Avoiding unnecessary re-fetches for the same API call with identical arguments.
  const fetchKey = useMemo(
    () => ({ url, queryString, API }),
    [url, queryString, API]
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${API}/${url}${queryString ? `?${queryString}` : ""}`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("Content-Type");

        if (contentType?.includes("json")) {
          const responseData: T = await response.json();
          setData(responseData);
        } else {
          const textData: string = await response.text();
          setData(textData as T);
        }
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchKey]); // Use the memoization key as dependency

  return { data, loading, error };
}
