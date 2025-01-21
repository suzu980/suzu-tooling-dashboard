import { URLParamType } from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const getApiUrl = (url: string = "", params: URLParamType = {}) => {
  const p = new URLSearchParams(params).toString();
  const mergedUrl = url.concat(p.trim() === "" ? "" : "?".concat(p));
  return mergedUrl;
};
