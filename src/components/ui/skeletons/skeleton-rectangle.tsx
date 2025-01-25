import { cn } from "@/utils/utils";
import { HtmlHTMLAttributes } from "react";

const SkeletonRectangle = ({
  className,
  ...rest
}: HtmlHTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...rest}
      className={cn(
        "h-24 w-full bg-neutral-200 dark:bg-neutral-800 animate-pulse",
        className
      )}
    ></div>
  );
};
export default SkeletonRectangle;
