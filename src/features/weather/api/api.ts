import { externalRequest } from "@/config/constants";
import { URLParamType } from "@/types/types";
import { getApiUrl } from "@/utils/utils";

export const getWeatherForecast = (params: URLParamType) => {
  const url = getApiUrl("https://api.open-meteo.com/v1/forecast", params);
  return externalRequest({ url });
};
