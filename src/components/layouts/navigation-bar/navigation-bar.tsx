interface NavigationBarProps {
  children: React.ReactNode;
}
import { ChartLine, House, Rss, Settings, Sun } from "lucide-react";
import { NavigationItemType } from "./types";
import NavigationItem from "./navigation-item";
const NavigationBar = ({ children }: NavigationBarProps) => {
  const navItems: NavigationItemType[] = [
    {
      label: "Dashboard",
      icon: <House className="h-5 w-5 sm:h-4 sm:w-4" />,
      path: "",
    },
    {
      label: "RSS",
      icon: <Rss className="h-5 w-5 sm:h-4 sm:w-4" />,
      path: "",
    },
    {
      label: "Mood",
      icon: <Sun className="h-5 w-5 sm:h-4 sm:w-4" />,
      path: "",
    },
    {
      label: "Stock",
      icon: <ChartLine className="h-5 w-5 sm:h-4 sm:w-4" />,
      path: "",
    },
    {
      label: "Settings",
      icon: <Settings className="h-5 w-5 sm:h-4 sm:w-4" />,
      path: "",
    },
  ];

  return (
    <>
      <div className="border fixed bottom-0 sm:right-0 sm:bottom-auto w-screen sm:w-48 h-20 sm:h-screen flex flex-row sm:flex-col sm:gap-y-1 px-2 py-2 sm:px-1 sm:py-1 gap-x-2 sm:gap-x-0">
        {navItems.map((navItem) => {
          return <NavigationItem navItem={navItem} />;
        })}
      </div>
      <div className="mb-24 mr-0 sm:mr-48 sm:mb-0 h-full ">{children}</div>
    </>
  );
};
export default NavigationBar;
