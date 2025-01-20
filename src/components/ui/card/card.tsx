import {
  baseColors,
  borderColors,
  cardColors,
  shadowColors,
} from "@/config/app-data";
import { cn } from "@/utils/utils";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};
export const CardSubDescription = ({ children, className }: CardProps) => {
  return (
    <div className={cn("text-end text-xs opacity-30", className)}>
      {children}
    </div>
  );
};
export const CardDescription = ({ children, className }: CardProps) => {
  return (
    <div className={cn("text-sm font-normal opacity-60", className)}>
      {children}
    </div>
  );
};
export const CardTitle = ({ children, className }: CardProps) => {
  return <div className={cn("text-lg font-bold", className)}>{children}</div>;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "border-0 p-4 rounded-md transition-colors",
        shadowColors,
        cardColors,
        borderColors,
        className
      )}
    >
      {children}
    </div>
  );
};
