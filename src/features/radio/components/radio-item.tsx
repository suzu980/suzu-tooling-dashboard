import Separator from "@/components/ui/separator/separator";
import { RadioItem } from "../types";
import { cn } from "@/utils/utils";
import { useRadioStore } from "@/stores/store";

const RadioListItem = ({ radioItem }: { radioItem: RadioItem }) => {
  const currentlyPlaying = useRadioStore((state) => state.currentPlaying);
  const setCurrentlyPlaying = useRadioStore((state) => state.setCurrentPlaying);
  return (
    <div
      className={cn(
        "bg-neutral-50 dark:bg-neutral-900 p-4 rounded-md cursor-pointer hover:bg-neutral-100 hover:dark:bg-neutral-800 transition-colors duration-200"
      )}
      onClick={() => setCurrentlyPlaying(radioItem)}
    >
      <div className="flex justify-between">
        <div className="font-semibold">{radioItem.name}</div>
        {currentlyPlaying?.id === radioItem.id && (
          <div className="bg-red-500 h-3 w-3 rounded-full animate-pulse"></div>
        )}
      </div>
      <Separator className="my-2" />
      <div className="text-sm">{radioItem.description}</div>
      <div className="text-sm opacity-50">{radioItem.url}</div>
      <div className="text-sm opacity-50 text-end">{radioItem.country}</div>
    </div>
  );
};
export default RadioListItem;
