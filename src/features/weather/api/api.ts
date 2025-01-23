import { externalRequest, routes } from "@/config/constants";
import { URLParamType } from "@/types/types";
import { getApiUrl } from "@/utils/utils";
import { MeteoForecast } from "../types";

type getWeatherForecastFn = (params: URLParamType) => Promise<MeteoForecast>;

export const getWeatherForecast: getWeatherForecastFn = (
  params: URLParamType
) => {
  const url = getApiUrl(routes.weather.weatherForecast, params);
  return externalRequest({ url });
};
