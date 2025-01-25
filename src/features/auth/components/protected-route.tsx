import { Navigate, Outlet } from "react-router";
import { refreshToken } from "../api/api";
import { getAuthKey } from "@/config/constants";
import { useApiGet } from "@/hooks/use-api";
import { useRadioStore } from "@/stores/store";
import { useQueryClient } from "@tanstack/react-query";
import { clearAuthLocalStorage, setAuthLocalStorage } from "@/utils/utils";

const ProtectedRoute = ({ isLogin }: { isLogin?: boolean }) => {
  const clearCurrentPlaying = useRadioStore(
    (state) => state.clearCurrentPlaying
  );
  const token = getAuthKey();
  const queryClient = useQueryClient();
  const { data, status } = useApiGet(
    ["auth", token],
    async () => await refreshToken(token ?? ""),
    { enabled: token !== null }
  );
  if (token === null && isLogin) return <Outlet />;
  if (token === null) return <Navigate to={"/"} />;
  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") {
    clearAuthLocalStorage();
    queryClient.clear();
  }
  if (status === "success" && data !== undefined) {
    clearCurrentPlaying();
    setAuthLocalStorage(data);
    return isLogin ? <Navigate to={"/dashboard"} /> : <Outlet />;
  }
};
export default ProtectedRoute;
