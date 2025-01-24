import { useRadioStore } from "@/stores/store";
import { cn } from "@/utils/utils";
import { useEffect, useRef } from "react";

const RadioPlayer = ({
  className,
  playerOnly,
}: {
  className?: string;
  playerOnly?: boolean;
}) => {
  const currentlyPlaying = useRadioStore((state) => state.currentPlaying);
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    if (audioRef.current !== null) audioRef.current.volume = 0.1;
  }, []);

  return (
    <div className={cn("flex flex-col gap-y-2", className)}>
      {!playerOnly && (
        <div>Currently playing: {currentlyPlaying?.name ?? "-"}</div>
      )}
      <audio
        ref={audioRef}
        controls
        autoPlay
        className="invert saturate-0 dark:invert-0 transition-all"
      >
        <source src={currentlyPlaying?.url ?? ""} />
      </audio>
    </div>
  );
};
export default RadioPlayer;
