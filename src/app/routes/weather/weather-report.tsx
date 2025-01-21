import {
  Card,
  CardDescription,
  CardSubDescription,
  CardTitle,
} from "@/components/ui/card/card";
import Separator from "@/components/ui/separator/separator";
import { jpDay } from "@/config/app-data";
import { getWeatherForecast } from "@/features/weather/api/api";
import { weatherCodes } from "@/features/weather/constants/weather-codes";
import { useApiGet } from "@/hooks/use-api";
import useDarkMode from "@/hooks/use-dark-mode";
import { useGeolocation } from "@/hooks/use-geolocation";
import { cn } from "@/utils/utils";

const WeatherReport = () => {
  const { dark } = useDarkMode();
  const locationState = useGeolocation();
  const { data: currentWeatherData, status: currentWeatherStatus } = useApiGet(
    ["currentWeather"],
    async () =>
      await getWeatherForecast({
        latitude: locationState.latitude?.toString() ?? "",
        longitude: locationState.longitude?.toString() ?? "",
        daily: "weather_code",
        timezone: "Asia/Singapore",
      }),
    {
      enabled:
        locationState.latitude !== null && locationState.longitude !== null,
    },
  );
  return (
    <div className="grid grid-cols-1 mx-4 py-4 gap-x-4 gap-y-4">
      <Card>
        <CardTitle>1 Week Weather Forecast</CardTitle>
        <Separator className="my-4" />
        <div className="flex gap-x-4 overflow-x-auto">
          {currentWeatherStatus === "pending" && (
            <div className="h-24 w-full bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
          )}
          {currentWeatherData?.daily.weather_code.map((code, idx) => {
            const todayDay = new Date().getDay();
            const day = (+todayDay + +idx) % 7;
            return (
              <div
                className={cn(
                  "flex flex-col items-center px-4 py-4 flex-grow basis-0 min-w-24",
                )}
              >
                <div className="font-bold">{jpDay[day]}</div>
                <img
                  className={cn(
                    "h-12 w-12 min-h-12 min-w-12 max-h-12 max-w-12 aspect-square",
                  )}
                  src={weatherCodes[code].day.image}
                />
              </div>
            );
          })}
        </div>
      </Card>
      <Card>
        <CardDescription>
          Detailed Weather forecast for the next 7 days
        </CardDescription>
        <Separator className="my-2" />
      </Card>
    </div>
  );
};
export default WeatherReport;
