import { cn } from "@/utils/utils";
import RssCard from "./rss-card";
import { useApiGet } from "@/hooks/use-api";
import { listRssList } from "@/features/rss-feed/api/api";
import RssListSkeleton from "./rss-grid-list-skeleton";
import StickyAddBtn from "@/components/ui/sticky-add/sticky-add";
import { Card, CardDescription } from "@/components/ui/card/card";

interface RssListProps {
  className?: string;
}
const RssList = ({ className }: RssListProps) => {
  const { data, status } = useApiGet(
    ["rssList"],
    async () => await listRssList(),
    {}
  );
  if (status == "pending") return <RssListSkeleton />;
  if (status === "success" && data !== undefined)
    return (
      <>
        <StickyAddBtn />
        <div
          className={cn(
            "py-4 mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4 gap-x-4",
            className
          )}
        >
          {data.items.length > 0 ? (
            data.items.map((i) => <RssCard rssItem={i} key={i.id} />)
          ) : (
            <Card className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 xl:col-span-4 2xl:col-span-5">
              <CardDescription>
                You have no RSS Items in your list.
              </CardDescription>
            </Card>
          )}
        </div>
      </>
    );
};
export default RssList;
