import { Card, CardDescription, CardTitle } from "@/components/ui/card/card";
import { useApiGet } from "@/hooks/use-api";
import { useGeolocation } from "@/hooks/use-geolocation";
import { cn } from "@/utils/utils";
import { getWeatherForecast } from "../api/api";
import { weatherCodes } from "../constants/weather-codes";

interface DashboardWeatherCardProps {
  className?: string;
}
const DashboardWeatherCard = ({ className }: DashboardWeatherCardProps) => {
  const locationState = useGeolocation();
  const { data: currentWeatherData, status: currentWeatherStatus } = useApiGet(
    ["currentWeather"],
    async () =>
      await getWeatherForecast({
        latitude: locationState.latitude?.toString() ?? "",
        longitude: locationState.longitude?.toString() ?? "",
        daily: "weather_code",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
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
        {currentWeatherStatus === "pending" && !locationState.error
          ? "Loading..."
          : currentWeatherData?.daily.weather_code[0]
          ? weatherCodes[currentWeatherData.daily.weather_code[0]].day
              .description
          : "No Data"}
        <div className="flex justify-center">
          {currentWeatherStatus === "pending" && !locationState.error ? (
            <div className="h-24 w-24 bg-neutral-200 dark:bg-neutral-800 animate-pulse rounded-full"></div>
          ) : currentWeatherData?.daily.weather_code[0] ? (
            <div className="h-full w-full bg-sky-300 dark:bg-sky-900 mt-2 rounded-lg flex justify-center items-center ">
              <img
                className={cn("h-24 w-24 rounded-full")}
                src={
                  weatherCodes[currentWeatherData.daily.weather_code[0]].day
                    .image
                }
              />
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </CardTitle>
    </Card>
  );
};
export default DashboardWeatherCard;
