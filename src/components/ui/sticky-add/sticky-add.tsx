import { cn } from "@/utils/utils";
import { Plus } from "lucide-react";

const StickyAddBtn = () => {
  return (
    <button
      className={cn(
        "fixed bg-blue-500 h-12 w-12 bottom-[calc(8rem)] right-16",
        "sm:bottom-[calc(8rem-4rem)] sm:right-[calc(4rem+10rem)]",
        "rounded-full",
        "hover:bg-blue-400",
        "flex justify-center items-center",
        "text-white cursor-pointer",
        "shadow-md",
        "transition-colors",
        "z-10",
      )}
    >
      <Plus />
    </button>
  );
};
export default StickyAddBtn;
