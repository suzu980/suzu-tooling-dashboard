import { useApiGet } from "@/hooks/use-api";
import { useGeolocation } from "@/hooks/use-geolocation";
import { getWeatherForecast } from "../api/api";
import { weatherCodes } from "../constants/weather-codes";
import { borderColors, jpDay, shadowColors } from "@/config/app-data";
import { cn } from "@/utils/utils";
import { motion } from "motion/react";

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
    <div className="flex gap-x-4 justify-start lg:justify-center">
      {currentWeatherStatus === "pending" && !locationState.error && (
        <div className="h-48 w-full bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
      )}
      {locationState.error && (
        <div className="text-sm">No Location Permissions.</div>
      )}
      {currentWeatherData?.daily.weather_code.map((code, idx) => {
        const todayDay = new Date().getDay();
        const day = (+todayDay + +idx) % 7;
        return (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 0.05 * idx }}
            className={cn(
              "flex flex-col gap-y-4 items-center justify-between px-4 py-4 min-w-20 h-48 my-2"
            )}
          >
            <div className="font-bold">{jpDay[day]}</div>
            <img
              className={cn(
                "h-12 w-12 min-h-12 min-w-12 max-h-12 max-w-12 aspect-square bg-sky-300 dark:bg-sky-900 rounded-full"
              )}
              src={weatherCodes[code].day.image}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
export default SimpleWeatherForecastSummary;
