import { NavLink } from "react-router";
import { NavigationItemType } from "./types";
import { cn } from "@/utils/utils";
import { activeColors } from "@/config/app-data";

interface NavigationItemProps {
  navItem: NavigationItemType;
}
const NavigationItem = ({ navItem }: NavigationItemProps) => {
  return (
    <NavLink
      to={navItem.path}
      className={({ isActive }) =>
        cn(
          " p-1 basis-0 flex-grow sm:flex-none flex flex-col items-center justify-center gap-y-1 sm:gap-y-0 sm:flex-row sm:justify-start sm:gap-x-2 sm:p-2 rounded-lg transition-colors duration-200",
          { [activeColors]: isActive },
        )
      }
    >
      {navItem.icon}
      <div className="text-center text-xs sm:text-sm">{navItem.label}</div>
    </NavLink>
  );
};
export default NavigationItem;
