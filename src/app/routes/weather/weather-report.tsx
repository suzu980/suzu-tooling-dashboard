import { Card, CardDescription, CardTitle } from "@/components/ui/card/card";
import Separator from "@/components/ui/separator/separator";
import SimpleWeatherForecastSummary from "@/features/weather/components/simple-weather-forecast-summary";
import WeatherForecastChart from "@/features/weather/components/weather-forecast-chart";

const WeatherReport = () => {
  return (
    <div className="grid grid-cols-1 mx-4 py-4 gap-x-4 gap-y-4">
      <Card>
        <CardTitle>1 Week Weather Forecast</CardTitle>
        <Separator className="mb-4" />
        <div className="py-4">
          <div className="overflow-x-auto">
            <SimpleWeatherForecastSummary />
          </div>
        </div>
      </Card>
      <Card>
        <CardDescription>
          Detailed Weather forecast for the next 14 days
        </CardDescription>
        <Separator />
        <WeatherForecastChart />
      </Card>
    </div>
  );
};
export default WeatherReport;
