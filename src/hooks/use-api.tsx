import {
  useQuery,
  UseQueryOptions,
  QueryKey,
  QueryFunction,
} from "@tanstack/react-query";

export const useApiGet = (
  key: QueryKey,
  fn: QueryFunction,
  options: UseQueryOptions
) =>
  useQuery({
    ...options,
    queryKey: key,
    queryFn: fn,
  });
