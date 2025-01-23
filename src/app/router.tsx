import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import Welcome from "./routes/dashboard/dashboard";
import NavigationBar from "@/components/layouts/navigation-bar/navigation-bar";
import RssList from "./routes/rss/rss-list";
import MoodTracker from "./routes/mood-tracker/mood-tracker";
import StockList from "./routes/stock/stock-list";
import NotFoundPage from "./routes/not-found";
import WeatherReport from "./routes/weather/weather-report";
import { AnimatePresence } from "motion/react";
import LandingPage from "./routes/landing-page";

const RouteProvider = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route element={<NavigationBar />}>
          <Route path="/dashboard" element={<Welcome />} />
          <Route path="/rss" element={<RssList />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/stock" element={<StockList />} />
          <Route path="/weather" element={<WeatherReport />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};
const AppRouter = () => {
  return (
    <BrowserRouter>
      <RouteProvider />
    </BrowserRouter>
  );
};
export default AppRouter;
