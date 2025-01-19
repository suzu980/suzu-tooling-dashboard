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
      <div className="py-1 mx-2 flex flex-col gap-y-1">
        {Array.from(Array(20).keys()).map((i) => (
          <Card key={i}>
            <CardTitle>Feed {i}</CardTitle>
            <Separator className="my-1" />
            <CardDescription>Additional Description</CardDescription>
            <CardSubDescription>Additional Description</CardSubDescription>
          </Card>
        ))}
      </div>
    </>
  );
};
export default RssList;
