import { buttonColors, hoverColors } from "@/config/app-data";
import { localStorageKeys } from "@/config/constants";
import { useRadioStore } from "@/stores/store";
import { cn } from "@/utils/utils";
import { LogOut } from "lucide-react";
import { HTMLAttributes } from "react";
import { useNavigate } from "react-router";

const LogoutBtn = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  const navigate = useNavigate();
  const clearCurrentPlaying = useRadioStore(
    (state) => state.clearCurrentPlaying
  );
  return (
    <div
      {...rest}
      className={cn(
        "w-fit px-4 py-3 bg-blue-500 rounded-lg cursor-pointer transition-colors",
        buttonColors,
        hoverColors,
        className
      )}
      onClick={() => {
        localStorage.removeItem(localStorageKeys.auth.authToken);
        clearCurrentPlaying();
        navigate("/");
      }}
    >
      <LogOut className="w-5 h-5" />
    </div>
  );
};
export default LogoutBtn;
