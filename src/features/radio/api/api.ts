import { externalRequest, routes } from "@/config/constants";
import { URLParamType } from "@/types/types";
import { getApiUrl } from "@/utils/utils";
import { RadioList } from "../types";

type listRadioListFn = (params?: URLParamType) => Promise<RadioList>;

export const listRadioList: listRadioListFn = (params = {}) => {
  const url = getApiUrl(routes.radio.radioList, params);

  return externalRequest({
    url,
  });
};
