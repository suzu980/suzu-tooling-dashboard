import { navItems } from "@/config/app-data";
import NavigationItem from "./navigation-item";
import { Outlet } from "react-router";
import { cn } from "@/utils/utils";
import { Moon, Sun } from "lucide-react";
import useDarkMode from "@/hooks/use-dark-mode";
const NavigationBar = () => {
  const { dark, toggleDarkMode } = useDarkMode();
  return (
    <>
      <nav
        className={cn(
          "fixed bottom-0 sm:right-0 sm:bottom-auto w-screen sm:w-40 h-20 sm:h-screen flex flex-row sm:flex-col sm:gap-y-1 px-2 py-2 sm:px-1 sm:py-1 gap-x-2 sm:gap-x-0 bg-gray-50 text-gray-800",
          "dark:bg-gray-800 dark:text-gray-100",
          "transition-colors",
        )}
      >
        {navItems.map((navItem, idx) => {
          return <NavigationItem key={idx} navItem={navItem} />;
        })}
      </nav>
      <div
        className={cn(
          "fixed top-0 h-14 w-screen flex items-center justify-start px-2 cursor-pointer",
          "bg-gray-50 text-gray-800",
          "dark:bg-gray-800 dark:text-gray-100",
          "transition-colors",
        )}
      >
        <div
          className="bg-gray-200 dark:bg-gray-900 p-2 rounded-full transition-colors"
          onClick={() => toggleDarkMode()}
        >
          {dark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </div>
      </div>
      <div
        className={cn(
          "mb-20 sm:mb-0 mr-0 sm:mr-40",
          "h-[calc(100vh-5rem-3.5rem)] sm:h-[calc(100vh-3.5rem)] w-screen sm:w-[calc(100vw-10rem)]",
          "mt-14",
          "bg-gray-100 text-gray-800",
          "dark:bg-gray-700 dark:text-gray-100",
          "transition-colors",
          "overflow-y-auto",
          "border border-gray-200 dark:border-gray-600",
        )}
      >
        <Outlet />
      </div>
    </>
  );
};
export default NavigationBar;
