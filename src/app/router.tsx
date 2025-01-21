import { BrowserRouter, Route, Routes } from "react-router";
import Welcome from "./routes/welcome";
import NavigationBar from "@/components/layouts/navigation-bar/navigation-bar";
import RssList from "./routes/rss/rss-list";
import MoodTracker from "./routes/mood-tracker/mood-tracker";
import StockList from "./routes/stock/stock-list";
import NotFoundPage from "./routes/not-found";
import WeatherReport from "./routes/weather/weather-report";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavigationBar />}>
          <Route path="/" element={<Welcome />} />
          <Route path="/rss" element={<RssList />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/stock" element={<StockList />} />
          <Route path="/weather" element={<WeatherReport />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
