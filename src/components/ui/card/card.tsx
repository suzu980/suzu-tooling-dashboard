import { borderColors, cardColors, shadowColors } from "@/config/app-data";
import { cn } from "@/utils/utils";
import { HTMLMotionProps, motion } from "motion/react";

interface CardProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode;
  className?: string;
}
export const CardSubDescription = ({ children, className }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 0.3, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, delay: 0.1 }}
      className={cn("text-end text-xs opacity-30", className)}
    >
      {children}
    </motion.div>
  );
};
export const CardDescription = ({ children, className }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 0.6, x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, delay: 0.3 }}
      className={cn("text-sm font-normal opacity-60", className)}
    >
      {children}
    </motion.div>
  );
};
export const CardTitle = ({ children, className }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1, delay: 0.1 }}
      className={cn("text-lg font-bold", className)}
    >
      {children}
    </motion.div>
  );
};

export const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "border-0 p-4 rounded-md transition-colors",
        shadowColors,
        cardColors,
        borderColors,
        className
      )}
    >
      {children}
    </motion.div>
  );
};
