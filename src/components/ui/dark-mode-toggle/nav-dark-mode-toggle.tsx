import { buttonColors } from "@/config/app-data";
import useDarkMode from "@/hooks/use-dark-mode";
import { cn } from "@/utils/utils";
import { Moon, Sun } from "lucide-react";
import { HTMLAttributes } from "react";

const DarkModeToggle = ({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) => {
  const { dark, toggleDarkMode } = useDarkMode();
  return (
    <div
      {...rest}
      className={cn(
        "dark:bg-gray-900 p-2 rounded-full transition-colors ",
        buttonColors,
        className
      )}
      onClick={() => toggleDarkMode()}
    >
      {dark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </div>
  );
};
export default DarkModeToggle;
