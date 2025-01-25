import { Card, CardDescription, CardTitle } from "@/components/ui/card/card";
import Separator from "@/components/ui/separator/separator";
import { jpDay } from "@/config/app-data";
import { getAuthName } from "@/config/constants";
import RadioList from "@/features/radio/components/radio-list";
import DashboardWeatherCard from "@/features/weather/components/dashboard-weather-card";

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-4 mx-4 py-4">
      <Card className="col-span-1 grid grid-cols-2 gap-x-4">
        <div>
          <CardDescription>おはようございます</CardDescription>
          <CardTitle className="text-2xl">{getAuthName()}</CardTitle>
        </div>
        <div>
          <CardDescription>今日は</CardDescription>
          <CardTitle>{jpDay[new Date().getDay()]}曜日</CardTitle>
        </div>
      </Card>
      <DashboardWeatherCard className="col-span-1 opacity-100" />
      <Card className="col-span-1">
        <CardTitle>Radio</CardTitle>
        <Separator />
        <CardDescription>List of Radios</CardDescription>
        <RadioList />
      </Card>
    </div>
  );
};
export default Welcome;
