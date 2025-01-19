import { cn } from "@/utils/utils";

interface SeparatorProps {
  className?: string;
}
const Separator = ({ className }: SeparatorProps) => {
  return (
    <div
      className={cn(
        "w-full h-[1px] bg-gray-200 dark:bg-gray-600 transition-colors",
        className,
      )}
    ></div>
  );
};
export default Separator;
