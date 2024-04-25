import { useState, useEffect, useMemo } from "react";

import CONFIG from "@/config";

const DefaultAPI = CONFIG.APP.API_URL;

export type FetchTypes<T> = {
  loading: boolean;
  error: Error | null;
  data: T | null;
};

type Query = Record<string, string> | {};

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

        const responseData: T = await response.json();
        setData(responseData);
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
