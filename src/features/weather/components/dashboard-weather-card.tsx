import { Card, CardDescription, CardTitle } from "@/components/ui/card/card";
import { useApiGet } from "@/hooks/use-api";
import { useGeolocation } from "@/hooks/use-geolocation";
import { cn } from "@/utils/utils";
import { getWeatherForecast } from "../api/api";
import { weatherCodes } from "../constants/weather-codes";
import useDarkMode from "@/hooks/use-dark-mode";
import { shadowColors } from "@/config/app-data";

interface DashboardWeatherCardProps {
  className?: string;
}
const DashboardWeatherCard = ({ className }: DashboardWeatherCardProps) => {
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
    }
  );
  return (
    <Card className={cn(className)}>
      {locationState.loading && <CardDescription>Weather</CardDescription>}
      {locationState.error && (
        <CardDescription>No location Access</CardDescription>
      )}
      {!locationState.loading && !locationState.error && (
        <CardDescription>Weather</CardDescription>
      )}
      <CardTitle>
        {currentWeatherStatus === "pending"
          ? "Loading..."
          : currentWeatherData?.daily.weather_code[0]
          ? weatherCodes[currentWeatherData.daily.weather_code[0]].day
              .description
          : "No Data"}
        <div className="flex justify-center">
          {currentWeatherStatus === "pending" ? (
            <div className="h-24 w-24 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded-full"></div>
          ) : currentWeatherData?.daily.weather_code[0] ? (
            <img
              className={cn("h-24 w-24 rounded-full", shadowColors)}
              src={
                weatherCodes[currentWeatherData.daily.weather_code[0]][
                  dark ? "night" : "day"
                ].image
              }
            />
          ) : (
            <div></div>
          )}
        </div>
      </CardTitle>
    </Card>
  );
};
export default DashboardWeatherCard;
