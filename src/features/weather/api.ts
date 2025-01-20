import { externalRequest } from "@/config/constants";

export const fetchCurrentWeather = () =>
  externalRequest({
    url: "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=weather_code",
    method: "GET",
  });
