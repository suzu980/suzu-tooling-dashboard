import { ChartLine, House, Rss, Sun } from "lucide-react";
import { NavigationItemType } from "@/components/layouts/navigation-bar/types";

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
  //{
  //  label: "Settings",
  //  icon: <Settings className="h-5 w-5 sm:h-4 sm:w-4" />,
  //  path: "",
  //},
];
