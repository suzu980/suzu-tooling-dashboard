import { externalRequest, getAuthKey, routes } from "@/config/constants";
import { getApiUrl } from "@/utils/utils";
import { RSSList } from "../types";

type listRssListFn = (params?: URLParamType) => Promise<RSSList>;
export const listRssList: listRssListFn = (params = {}) => {
  const url = getApiUrl(routes.rss.rssList, params);
  const token = getAuthKey();
  return externalRequest({
    method: "GET",
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
