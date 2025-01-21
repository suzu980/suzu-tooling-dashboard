import { useApiGet } from "@/hooks/use-api";
import { useGeolocation } from "@/hooks/use-geolocation";
import { getWeatherForecast } from "../api/api";
import { weatherCodes } from "../constants/weather-codes";
import { jpDay } from "@/config/app-data";
import { cn } from "@/utils/utils";

const SimpleWeatherForecastSummary = () => {
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
    <div className="flex gap-x-4">
      {" "}
      {currentWeatherStatus === "pending" && (
        <div className="h-24 w-full bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
      )}
      {currentWeatherData?.daily.weather_code.map((code, idx) => {
        const todayDay = new Date().getDay();
        const day = (+todayDay + +idx) % 7;
        return (
          <div
            className={cn(
              "flex flex-col gap-y-4 items-center px-4 py-4 flex-grow basis-0 min-w-24"
            )}
          >
            <div className="font-bold">{jpDay[day]}</div>
            <img
              className={cn(
                "h-12 w-12 min-h-12 min-w-12 max-h-12 max-w-12 aspect-square bg-sky-300 dark:bg-sky-900 rounded-full"
              )}
              src={weatherCodes[code].day.image}
            />
          </div>
        );
      })}
    </div>
  );
};
export default SimpleWeatherForecastSummary;
