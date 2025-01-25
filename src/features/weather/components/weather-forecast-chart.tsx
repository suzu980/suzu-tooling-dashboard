import { useApiGet } from "@/hooks/use-api";
import { useGeolocation } from "@/hooks/use-geolocation";
import { getWeatherForecast } from "../api/api";
import {
  Label,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useMemo } from "react";
import SkeletonRectangle from "@/components/ui/skeletons/skeleton-rectangle";

const WeatherForecastChart = () => {
  const locationState = useGeolocation();
  const { data: currentWeatherData, status: currentWeatherStatus } = useApiGet(
    ["currentWeather", "14days"],
    async () =>
      await getWeatherForecast({
        latitude: locationState.latitude?.toString() ?? "",
        longitude: locationState.longitude?.toString() ?? "",
        daily: "weather_code,temperature_2m_max,temperature_2m_min",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        forecast_days: "14",
      }),
    {
      enabled:
        locationState.latitude !== null && locationState.longitude !== null,
    }
  );
  const processedData = useMemo(() => {
    if (currentWeatherData === undefined) return [];

    const minTemps = currentWeatherData.daily.temperature_2m_min.map((i) => i);
    const maxTemps = currentWeatherData.daily.temperature_2m_max.map((i) => i);
    const time = currentWeatherData.daily.time.map((i) => i);
    const processed: {
      minTemps: number;
      maxTemps: number;
      time: string;
    }[] = [];
    for (let i = 0; i < 14; i++) {
      processed.push({
        minTemps: minTemps[i],
        maxTemps: maxTemps[i],
        time: time[i],
      });
    }
    return processed;
  }, [currentWeatherData]);
  return (
    <div className="flex gap-x-4 justify-start lg:justify-center h-52 w-full p-4">
      {currentWeatherStatus === "pending" && !locationState.error && (
        <SkeletonRectangle />
      )}
      {locationState.error && (
        <div className="text-sm">No Location Permissions.</div>
      )}
      {currentWeatherData !== undefined && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={processedData}
            margin={{
              right: 30,
              left: -30,
            }}
          >
            <XAxis dataKey="time" fontSize={12} />
            <YAxis fontSize={12}></YAxis>
            <Line
              type="monotone"
              dataKey="minTemps"
              stroke="#A855F7"
              strokeWidth={1}
            />
            <Line
              type="monotone"
              dataKey="maxTemps"
              stroke="#FB7185"
              strokeWidth={1}
            />
            <Tooltip
              formatter={(val, name) => {
                if (name === "minTemps")
                  return [
                    `${val}${currentWeatherData.daily_units.temperature_2m_min}`,
                    "Minimum Temperature",
                  ];
                if (name === "maxTemps")
                  return [
                    `${val}${currentWeatherData.daily_units.temperature_2m_max}`,
                    "Maximum Temperature",
                  ];
                return [val, name];
              }}
              labelStyle={{ fontSize: 12, fontWeight: "bold" }}
              itemStyle={{ fontSize: 12 }}
            />
            <Legend
              formatter={(val) => {
                if (val === "minTemps") return "Min. Temperature";
                if (val === "maxTemps") return "Max. Temperature";
                return val;
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};
export default WeatherForecastChart;
