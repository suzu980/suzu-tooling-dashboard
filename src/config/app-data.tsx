import { ChartLine, House, Radio, Rss, Sun } from "lucide-react";
import { NavigationItemType } from "@/components/layouts/navigation-bar/types";
import { cn } from "@/utils/utils";

export const navItems: NavigationItemType[] = [
  {
    label: "Dashboard",
    icon: <House className="h-5 w-5 sm:h-4 sm:w-4" />,
    path: "",
  },
  {
    label: "RSS",
    icon: <Rss className="h-5 w-5 sm:h-4 sm:w-4" />,
    path: "rss",
  },
  {
    label: "Mood",
    icon: <Sun className="h-5 w-5 sm:h-4 sm:w-4" />,
    path: "mood-tracker",
  },
  {
    label: "Stock",
    icon: <ChartLine className="h-5 w-5 sm:h-4 sm:w-4" />,
    path: "stock",
  },
  {
    label: "Radio",
    icon: <Radio className="h-5 w-5 sm:h-4 sm:w-4" />,
    path: "radio",
  },
  //{
  //  label: "Settings",
  //  icon: <Settings className="h-5 w-5 sm:h-4 sm:w-4" />,
  //  path: "",
  //},
];

export const baseColors = cn("bg-gray-50", "dark:bg-gray-900");
export const buttonColors = cn("bg-gray-200", "dark:bg-gray-800");
export const textColors = cn("text-gray-800", "dark:text-gray-300");
export const bgColors = "bg-gray-100 dark:bg-gray-700";
export const borderColors = "border-gray-200 dark:border-gray-600";
export const separatorColor = "bg-gray-200 dark:bg-gray-600";
export const hoverColors = "hover:bg-gray-100 hover:text-gray-900";
export const groupHoverColors = "group-hover:text-gray-900";
export const activeColors = "bg-gray-200 dark:bg-gray-800";
