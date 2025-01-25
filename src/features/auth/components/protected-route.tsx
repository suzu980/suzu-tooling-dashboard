import { Navigate, Outlet } from "react-router";
import { refreshToken } from "../api/api";
import { localStorageKeys } from "@/config/constants";
import { useApiGet } from "@/hooks/use-api";
import { useRadioStore } from "@/stores/store";

const ProtectedRoute = ({ isLogin }: { isLogin?: boolean }) => {
  const clearCurrentPlaying = useRadioStore(
    (state) => state.clearCurrentPlaying
  );
  const token = localStorage.getItem(localStorageKeys.auth.authToken);
  const { data, status } = useApiGet(
    ["auth", token],
    async () => await refreshToken(token ?? ""),
    { enabled: token !== null }
  );
  console.log(status, data);
  if (token === null && isLogin) return <Outlet />;
  if (token === null) return <Navigate to={"/"} />;
  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") {
    localStorage.removeItem(localStorageKeys.auth.authToken);
    return <Navigate to={"/"} />;
  }
  if (status === "success" && data !== undefined) {
    clearCurrentPlaying();
    localStorage.setItem(localStorageKeys.auth.authToken, data.token);
    return isLogin ? <Navigate to={"/dashboard"} /> : <Outlet />;
  }
};
export default ProtectedRoute;
