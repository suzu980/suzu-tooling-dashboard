import { BrowserRouter, Route, Routes } from "react-router";
import Welcome from "./routes/dashboard/dashboard";
import NavigationBar from "@/components/layouts/navigation-bar/navigation-bar";
import RssList from "./routes/rss/rss-page";
import MoodTracker from "./routes/mood-tracker/mood-tracker";
import StockList from "./routes/stock/stock-list";
import NotFoundPage from "./routes/not-found";
import WeatherReport from "./routes/weather/weather-report";
import LandingPage from "./routes/landing-page";
import ProtectedRoute from "@/features/auth/components/protected-route";

const RouteProvider = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute isLogin />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<NavigationBar />}>
          <Route path="/dashboard" element={<Welcome />} />
          <Route path="/rss" element={<RssList />} />
          <Route path="/mood-tracker" element={<MoodTracker />} />
          <Route path="/stock" element={<StockList />} />
          <Route path="/weather" element={<WeatherReport />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Routes>
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
