import { useEffect, useMemo, useState } from "react";

export function useSWR<T = any, E = any>(
  _key: string,
  fetcher: () => T | Promise<T>
): {
  data?: T
  error?: E
} {
  // your code here
  const [data, setData] = useState<T>();
  const [error, setError] = useState<E>();
  const result = useMemo(fetcher, [_key]);
  useEffect(() => {
    Promise.resolve(fetcher()).then((data) => setData(data)).catch(e => setError(e))
  }, [])
  return { data: result instanceof Promise ? data : result, error }


}