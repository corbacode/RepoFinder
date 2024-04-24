import { useState, useEffect } from "react";

import CONFIG from "@/config";

export type FetchTypes<T> = {
  loading: boolean;
  error: Error | null;
  data: T | null;
};

export default function useFetch<T>(
  url: string,
  queryParams?: Record<string, string>
): FetchTypes<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const queryString = queryParams
    ? new URLSearchParams(queryParams).toString()
    : "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${CONFIG.APP.API_URL}/${url}${queryString ? `?${queryString}` : ""}`
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
  }, [url, queryString]);

  return { data, loading, error };
}
