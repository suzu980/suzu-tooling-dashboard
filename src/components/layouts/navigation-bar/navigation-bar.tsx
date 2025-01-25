import {
  baseColors,
  bgColors,
  buttonColors,
  hoverColors,
  navItems,
  textColors,
} from "@/config/app-data";
import NavigationItem from "./navigation-item";
import { cn } from "@/utils/utils";
import RadioPlayer from "@/features/radio/components/radio-player";
import AnimatedOutlet from "../animated-outlet";
import { useNavigate } from "react-router";
import { localStorageKeys } from "@/config/constants";
import DarkModeToggle from "@/components/ui/dark-mode-toggle/nav-dark-mode-toggle";
import { LogOut } from "lucide-react";
const NavigationBar = () => {
  const navigate = useNavigate();
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
          "fixed top-0 h-14 w-screen flex items-center justify-between px-2",
          baseColors,
          textColors,
          "transition-colors",
          "z-10"
        )}
      >
        <div
          className={cn(
            "w-fit px-4 py-3 bg-blue-500 rounded-lg cursor-pointer transition-colors",
            buttonColors,
            hoverColors
          )}
          onClick={() => {
            localStorage.removeItem(localStorageKeys.auth.authToken);
            navigate("/");
          }}
        >
          <LogOut className="w-5 h-5" />
        </div>
        <RadioPlayer
          className="gap-y-0 w-38 rounded-lg overflow-hidden flex flex-row items-center text-sm gap-x-2"
          playerOnly
        />
        <DarkModeToggle className="cursor-pointer" />
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
