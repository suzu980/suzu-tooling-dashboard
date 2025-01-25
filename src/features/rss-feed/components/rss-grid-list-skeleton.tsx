import { cn } from "@/utils/utils";
import SkeletonRectangle from "@/components/ui/skeletons/skeleton-rectangle";

interface RssListSkeletonProps {
  className?: string;
}
const RssListSkeleton = ({ className }: RssListSkeletonProps) => {
  return (
    <div
      className={cn(
        "py-4 mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4 gap-x-4",
        className
      )}
    >
      {Array.from(Array(3).keys()).map((i) => (
        <SkeletonRectangle key={i} className="dark:bg-neutral-700" />
      ))}
    </div>
  );
};
export default RssListSkeleton;
