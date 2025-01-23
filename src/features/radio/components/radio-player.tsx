import { useRadioStore } from "@/stores/store";
import { cn } from "@/utils/utils";

const RadioPlayer = ({
  className,
  playerOnly,
}: {
  className?: string;
  playerOnly?: boolean;
}) => {
  const currentlyPlaying = useRadioStore((state) => state.currentPlaying);

  return (
    <div className={cn("flex flex-col gap-y-2", className)}>
      {!playerOnly && (
        <div>Currently playing: {currentlyPlaying?.name ?? "Nothing"}</div>
      )}
      <audio controls src={currentlyPlaying?.url ?? ""} autoPlay muted></audio>
    </div>
  );
};
export default RadioPlayer;
