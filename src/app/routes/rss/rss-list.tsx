import {
  Card,
  CardDescription,
  CardSubDescription,
  CardTitle,
} from "@/components/ui/card/card";
import Separator from "@/components/ui/separator/separator";
import StickyAddBtn from "@/components/ui/sticky-add/sticky-add";

const RssList = () => {
  return (
    <>
      <StickyAddBtn />
      <div className="py-4 mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-4 gap-x-4">
        {Array.from(Array(100).keys()).map((i) => (
          <Card key={i} className="h-48 flex flex-col">
            <CardTitle>Feed {i}</CardTitle>
            <Separator className="my-1" />
            <CardDescription className="flex-grow overflow-hidden text-ellipsis from-black via-black to-white dark:from-white dark:via-white dark:to-black bg-gradient-to-b text-transparent bg-clip-text opacity-85">
              Your RSS Description. Your RSS Description. Your RSS Description.
              Your RSS Description. Your RSS Description. Your RSS Description.
            </CardDescription>
            <CardSubDescription>Added on:</CardSubDescription>
          </Card>
        ))}
      </div>
    </>
  );
};
export default RssList;
