import { NavigationItemType } from "./types";

interface NavigationItemProps {
  navItem: NavigationItemType;
}
const NavigationItem = ({ navItem }: NavigationItemProps) => {
  return (
    <div className="p-1 basis-0 flex-grow sm:flex-none flex flex-col items-center justify-center gap-y-1 sm:gap-y-0 sm:flex-row sm:justify-start sm:gap-x-2 sm:p-2 rounded-lg">
      {navItem.icon}
      <div className="text-center text-xs sm:text-sm">{navItem.label}</div>
    </div>
  );
};
export default NavigationItem;
