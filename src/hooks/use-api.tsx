import {
  useQuery,
  UseQueryOptions,
  QueryKey,
  QueryFunction,
  UseQueryResult,
} from "@tanstack/react-query";

export const useApiGet: <T extends object>(
  key: QueryKey,
  fn: QueryFunction<T>,
  options: Omit<UseQueryOptions<T>, "queryKey" | "queryFn">
) => UseQueryResult<T> = (key, fn, options) =>
  useQuery({
    ...options,
    queryKey: key,
    queryFn: fn,
  });
