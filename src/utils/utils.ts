import { localStorageKeys } from "@/config/constants";
import { refreshToken } from "@/features/auth/api/api";
import { AuthedUser } from "@/features/auth/types";
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

export const checkAuth = async (token: string) => {
  refreshToken(token)
    .then((value) => value)
    .catch((err) => {
      console.error(err);
      return null;
    });
};

export const setAuthLocalStorage = (data: AuthedUser) => {
  localStorage.setItem(localStorageKeys.auth.authToken, data.token);
  localStorage.setItem(localStorageKeys.auth.userName, data.record.name);
};
export const clearAuthLocalStorage = () => {
  localStorage.removeItem(localStorageKeys.auth.authToken);
  localStorage.removeItem(localStorageKeys.auth.userName);
};
