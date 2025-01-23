import {
  baseColors,
  bgColors,
  buttonColors,
  navItems,
  textColors,
} from "@/config/app-data";
import NavigationItem from "./navigation-item";
import { cn } from "@/utils/utils";
import { Moon, Sun } from "lucide-react";
import useDarkMode from "@/hooks/use-dark-mode";
import RadioPlayer from "@/features/radio/components/radio-player";
import AnimatedOutlet from "../animated-outlet";
const NavigationBar = () => {
  const { dark, toggleDarkMode } = useDarkMode();
  return (
    <>
      <nav
        className={cn(
          "fixed bottom-0 sm:right-0 sm:bottom-auto w-screen sm:w-40 h-20 sm:h-screen flex flex-row sm:flex-col sm:gap-y-1 px-2 py-2 sm:px-1 sm:py-1 gap-x-2 sm:gap-x-0",
          baseColors,
          textColors,
          "transition-colors",
          "z-10"
        )}
      >
        {navItems.map((navItem, idx) => {
          return <NavigationItem key={idx} navItem={navItem} />;
        })}
      </nav>
      <div
        className={cn(
          "fixed top-0 h-14 w-screen flex items-center justify-start px-2",
          baseColors,
          textColors,
          "transition-colors",
          "z-10"
        )}
      >
        <div
          className={cn(
            "dark:bg-gray-900 p-2 rounded-full transition-colors mr-2",
            buttonColors
          )}
          onClick={() => toggleDarkMode()}
        >
          {dark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </div>
        <RadioPlayer
          className="gap-y-0 w-full rounded-lg overflow-hidden"
          playerOnly
        />
      </div>
      <div
        className={cn(
          "mb-20 sm:mb-0 mr-0 sm:mr-40",
          "h-[calc(100vh-5rem-3.5rem)] sm:h-[calc(100vh-3.5rem)] w-screen sm:w-[calc(100vw-10rem)]",
          "mt-14",
          bgColors,
          textColors,
          "transition-colors",
          "overflow-y-auto"
        )}
      >
        <AnimatedOutlet />
      </div>
    </>
  );
};
export default NavigationBar;
