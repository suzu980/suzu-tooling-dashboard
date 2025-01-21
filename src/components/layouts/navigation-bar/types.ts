export type NavigationItemType = {
  label: string;
  icon: React.ReactElement;
  path: string;
};

export type MeteoForecast = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: 38.0;
  daily_units: { time: string; weather_code: string };
  daily: {
    time: string[];
    weather_code: number[];
  };
};
