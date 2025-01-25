import { buttonColors, hoverColors } from "@/config/app-data";
import { useRadioStore } from "@/stores/store";
import { clearAuthLocalStorage, cn } from "@/utils/utils";
import { useQueryClient } from "@tanstack/react-query";
import { LogOut } from "lucide-react";
import { HTMLAttributes } from "react";

const LogoutBtn = ({ className, ...rest }: HTMLAttributes<HTMLDivElement>) => {
  const clearCurrentPlaying = useRadioStore(
    (state) => state.clearCurrentPlaying
  );
  const queryClient = useQueryClient();
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
        clearAuthLocalStorage();
        queryClient.clear();
        clearCurrentPlaying();
      }}
    >
      <LogOut className="w-5 h-5" />
    </div>
  );
};
export default LogoutBtn;
