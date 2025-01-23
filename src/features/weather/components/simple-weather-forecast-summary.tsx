import { useApiGet } from "@/hooks/use-api";
import { useGeolocation } from "@/hooks/use-geolocation";
import { getWeatherForecast } from "../api/api";
import { weatherCodes } from "../constants/weather-codes";
import { jpDay } from "@/config/app-data";
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
        daily: "weather_code,temperature_2m_max,temperature_2m_min",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      }),
    {
      enabled:
        locationState.latitude !== null && locationState.longitude !== null,
    }
  );
  return (
    <div className="flex flex-col gap-x-4 justify-start lg:justify-center">
      {currentWeatherStatus === "pending" && !locationState.error && (
        <div className="h-52 w-full bg-neutral-200 dark:bg-neutral-800 animate-pulse"></div>
      )}
      {locationState.error && (
        <div className="text-sm">No Location Permissions.</div>
      )}
      {currentWeatherData?.daily.weather_code.map((code, idx) => {
        const todayDay = new Date().getDay();
        const day = (+todayDay + +idx) % 7;
        return (
          <motion.div
            key={idx}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ delay: 0.05 * idx }}
            className={cn(
              "flex flex-row gap-x-2 items-center justify-center my-2 select-none"
            )}
          >
            <div className="font-bold w-8 text-center">{jpDay[day]}</div>
            <div className="text-sm w-16 text-center">
              {currentWeatherData?.daily.temperature_2m_max[idx] ?? "No Data"}
              {currentWeatherData?.daily_units.temperature_2m_max ?? ""}
            </div>
            <div className="opacity-50 w-16 text-center text-sm">
              {currentWeatherData?.daily.temperature_2m_min[idx] ?? "No Data"}
              {currentWeatherData?.daily_units.temperature_2m_min ?? ""}
            </div>
            <img
              className={cn(
                "h-10 w-10 min-h-10 min-w-10 max-h-10 max-w-10 aspect-square bg-sky-300 dark:bg-sky-900 rounded-full"
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
