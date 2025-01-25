import {
  Card,
  CardDescription,
  CardSubDescription,
  CardTitle,
} from "@/components/ui/card/card";
import Separator from "@/components/ui/separator/separator";
import { RSSItem } from "../types";
import { cn } from "@/utils/utils";

interface RssCardProps {
  className?: string;
  rssItem: RSSItem;
}
const RssCard = ({ className, rssItem }: RssCardProps) => {
  return (
    <Card className={cn("h-48 flex flex-col", className)}>
      <CardTitle>{rssItem.name}</CardTitle>
      <Separator className="my-1" />
      <CardDescription className="flex-grow overflow-hidden text-ellipsis from-black via-black to-white dark:from-white dark:via-white dark:to-black bg-gradient-to-b text-transparent bg-clip-text opacity-85">
        {rssItem.description}
      </CardDescription>
      <CardSubDescription>{rssItem.created}</CardSubDescription>
    </Card>
  );
};
export default RssCard;
