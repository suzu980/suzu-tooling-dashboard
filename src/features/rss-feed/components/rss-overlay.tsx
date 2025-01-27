import { useApiGet } from "@/hooks/use-api";
import { useRssStore } from "@/stores/store";
import { getRssDetail } from "../api/api";

const RssOverlay = () => {
  const feedUrl = useRssStore((state) => state.feedURL);
  const { data, status } = useApiGet(
    ["rss-detail", feedUrl],
    async () => await getRssDetail({ url: feedUrl }),
    { enabled: feedUrl !== null }
  );
  return <div>Feed detail: {feedUrl}</div>;
};
export default RssOverlay;
