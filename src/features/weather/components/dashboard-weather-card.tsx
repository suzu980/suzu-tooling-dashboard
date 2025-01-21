import {
  Card,
  CardDescription,
  CardTitle,
  CardSubDescription,
} from "@/components/ui/card/card";
import { useApiGet } from "@/hooks/use-api";
import { useGeolocation } from "@/hooks/use-geolocation";
import { cn } from "@/utils/utils";
import { getWeatherForecast } from "../api/api";

interface DashboardWeatherCardProps {
  className?: string;
}
const DashboardWeatherCard = ({ className }: DashboardWeatherCardProps) => {
  const locationState = useGeolocation();
  const { data: currentWeatherData, status: currentWeatherStatus } = useApiGet(
    ["currentWeather", locationState.longitude, locationState.latitude],
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
  console.log(currentWeatherData);
  return (
    <Card className={cn(className)}>
      {locationState.loading && <CardDescription>Loading...</CardDescription>}
      {locationState.error && (
        <CardDescription>No location Access</CardDescription>
      )}
      {!locationState.loading && !locationState.error && (
        <CardDescription>Weather</CardDescription>
      )}
      <CardTitle>
        {currentWeatherStatus === "pending" ? "Loading..." : "Overcast"}
      </CardTitle>
    </Card>
  );
};
export default DashboardWeatherCard;
