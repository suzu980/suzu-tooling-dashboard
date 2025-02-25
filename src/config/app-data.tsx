import { CloudSun, House, Rss } from "lucide-react";
import { NavigationItemType } from "@/components/layouts/navigation-bar/types";
import { cn } from "@/utils/utils";
import { QueryClientConfig } from "@tanstack/react-query";

export const navItems: NavigationItemType[] = [
  {
    label: "Dashboard",
    icon: <House className="h-5 w-5 sm:h-4 sm:w-4" />,
    path: "dashboard",
  },
  {
    label: "RSS",
    icon: <Rss className="h-5 w-5 sm:h-4 sm:w-4" />,
    path: "rss",
  },
  {
    label: "Weather",
    icon: <CloudSun className="h-5 w-5 sm:h-4 sm:w-4" />,
    path: "weather",
  },
];

export const queryDefaultOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      retry: false,
    },
  },
};

export const jpDay = ["日", "月", "火", "水", "木", "金", "土"];

export const baseColors = cn("bg-white", "dark:bg-black");
export const cardColors = cn("bg-white", "dark:bg-black");
export const shadowColors = cn(
  "shadow-md shadow-neutral-200 dark:shadow-black"
);
export const buttonColors = cn("bg-neutral-200", "dark:bg-neutral-800");
export const textColors = cn("text-black", "dark:text-white");
export const bgColors = "bg-neutral-100 dark:bg-neutral-800";
export const borderColors = "border-neutral-200 dark:border-neutral-600";
export const separatorColor = "bg-gray-200 dark:bg-neutral-600";
export const hoverColors = "hover:bg-neutral-100 hover:text-gray-900";
export const groupHoverColors = "group-hover:text-neutral-900";
export const activeColors = "bg-neutral-200 dark:bg-neutral-800";
