import { MeteoForecast } from "@/components/layouts/navigation-bar/types";
import { externalRequest } from "@/config/constants";
import { URLParamType } from "@/types/types";
import { getApiUrl } from "@/utils/utils";

type getWeatherForecastFn = (params: URLParamType) => Promise<MeteoForecast>;

export const getWeatherForecast: getWeatherForecastFn = (
  params: URLParamType
) => {
  const url = getApiUrl("https://api.open-meteo.com/v1/forecast", params);
  console.log(url);
  return externalRequest({ url });
};
