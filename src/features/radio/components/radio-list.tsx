import { useApiGet } from "@/hooks/use-api";
import { listRadioList } from "../api/api";
import RadioListItem from "./radio-item";

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
          {radioList.items.map((i, idx) => {
            return <RadioListItem radioItem={i} key={idx} />;
          })}
        </>
      )}
    </div>
  );
};
export default RadioList;
