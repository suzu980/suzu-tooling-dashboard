import { externalRequest, routes } from "@/config/constants";
import { URLParamType } from "@/types/types";
import { getApiUrl } from "@/utils/utils";
import { AuthedUser } from "../types";

type authWithPasswordFn = (params: URLParamType) => Promise<AuthedUser>;

export const authWithPassword: authWithPasswordFn = (params: URLParamType) => {
  const url = getApiUrl(routes.users.authWithPassword);
  return externalRequest({
    method: "POST",
    url: url,
    headers: { "Content-Type": "application/json" },
    data: params,
  });
};
