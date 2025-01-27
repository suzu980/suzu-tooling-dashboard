import { externalRequest, getAuthKey, routes } from "@/config/constants";
import { getApiUrl } from "@/utils/utils";
import { RSSList } from "../types";
import { URLParamType } from "@/types/types";

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

type getRssDetailFn = (params?: URLParamType) => Promise<any>;
export const getRssDetail: getRssDetailFn = (params = {}) => {
  const url = getApiUrl(routes.rss.rssParser, params);
  return externalRequest({
    method: "GET",
    url,
  });
};
