import {
  Card,
  CardDescription,
  CardSubDescription,
  CardTitle,
} from "@/components/ui/card/card";
import Separator from "@/components/ui/separator/separator";

const Welcome = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-1 gap-y-1 mx-1 py-1">
      <Card className="col-span-1 sm:col-span-2">
        <CardDescription>おはようございます</CardDescription>
        <CardTitle className="text-2xl">しずちゃん</CardTitle>
      </Card>
      <Card className="col-span-1 sm:col-span-2">
        <CardTitle>Latest RSS Feeds</CardTitle>
        <Separator />
      </Card>
      <Card>
        <CardTitle>Mood Trend</CardTitle>
        <Separator />
        <CardDescription>Mood trend for the past 7 days</CardDescription>
        <CardSubDescription>Last updated:</CardSubDescription>
      </Card>
      <Card>
        <CardTitle>Stock Watchlist</CardTitle>
        <Separator />
      </Card>
    </div>
  );
};
export default Welcome;
