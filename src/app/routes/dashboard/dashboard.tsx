import { Card, CardDescription, CardTitle } from "@/components/ui/card/card";
import Separator from "@/components/ui/separator/separator";
import { jpDay } from "@/config/app-data";
import RadioList from "@/features/radio/components/radio-list";
import DashboardWeatherCard from "@/features/weather/components/dashboard-weather-card";
import { NavLink } from "react-router";

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mx-4 py-4">
      <div className="col-span-1 sm:col-span-2 grid grid-cols-2 sm:grid-cols-5 gap-x-4 gap-y-4">
        <Card className="col-span-2 sm:col-span-3">
          <CardDescription>おはようございます</CardDescription>
          <CardTitle className="text-2xl">しずちゃん</CardTitle>
        </Card>
        <div className="col-span-2 grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-4">
          <NavLink to={"weather"}>
            <DashboardWeatherCard className="col-span-1 sm:col-span-1 opacity-100 cursor-pointer" />
          </NavLink>
          <Card className="col-span-1 sm:col-span-1">
            <CardDescription>Day</CardDescription>
            <CardTitle>{jpDay[new Date().getDay()]}曜日</CardTitle>
          </Card>
        </div>
      </div>
      <Card className="col-span-2">
        <CardTitle>Radio</CardTitle>
        <Separator />
        <CardDescription>List of Radios</CardDescription>
        <RadioList />
      </Card>
    </div>
  );
};
export default Welcome;
