export type URLParamType =
  | string[][]
  | Record<string, string>
  | Record<string, string | null>
  | string
  | URLSearchParams;
