import { separatorColor } from "@/config/app-data";
import { cn } from "@/utils/utils";

interface SeparatorProps {
  className?: string;
}
const Separator = ({ className }: SeparatorProps) => {
  return (
    <div
      className={cn(
        "w-full h-[1px] transition-colors",
        separatorColor,
        className,
      )}
    ></div>
  );
};
export default Separator;
