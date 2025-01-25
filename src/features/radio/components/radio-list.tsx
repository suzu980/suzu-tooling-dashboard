import { useApiGet } from "@/hooks/use-api";
import { listRadioList } from "../api/api";
import RadioListItem from "./radio-item";
import { CardDescription } from "@/components/ui/card/card";

const RadioList = () => {
  const { data: radioList, status: radioListAPIStatus } = useApiGet(
    ["radioList"],
    async () => await listRadioList(),
    {}
  );
  return (
    <div className="py-4 flex flex-col max-h-[360px] overflow-y-auto gap-y-2">
      {radioListAPIStatus == "pending" && (
        <div className="h-24 w-full bg-neutral-200 dark:bg-neutral-800 animate-pulse "></div>
      )}
      {radioListAPIStatus === "success" && radioList !== undefined && (
        <>
          {radioList.items.length > 0 ? (
            radioList.items.map((i, idx) => {
              return <RadioListItem radioItem={i} key={idx} />;
            })
          ) : (
            <CardDescription>
              You have no radio stations accessible to you.
            </CardDescription>
          )}
        </>
      )}
    </div>
  );
};
export default RadioList;
