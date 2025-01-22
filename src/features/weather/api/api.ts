import { externalRequest } from "@/config/constants";
import { URLParamType } from "@/types/types";
import { getApiUrl } from "@/utils/utils";
import { MeteoForecast } from "../types";

type getWeatherForecastFn = (params: URLParamType) => Promise<MeteoForecast>;

export const getWeatherForecast: getWeatherForecastFn = (
  params: URLParamType
) => {
  const url = getApiUrl("https://api.open-meteo.com/v1/forecast", params);
  console.log(url);
  return externalRequest({ url });
};
