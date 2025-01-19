import { cn } from "@/utils/utils";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};
export const CardSubDescription = ({ children, className }: CardProps) => {
  return <div className={cn("text-xs opacity-75", className)}>{children}</div>;
};
export const CardDescription = ({ children, className }: CardProps) => {
  return <div className={cn("text-sm", className)}>{children}</div>;
};
export const CardTitle = ({ children, className }: CardProps) => {
  return <div className={cn("text-lg font-medium", className)}>{children}</div>;
};

export const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-600 p-2 rounded-md transition-colors",
        className,
      )}
    >
      {children}
    </div>
  );
};
