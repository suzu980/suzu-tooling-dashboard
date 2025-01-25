import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const client = axios.create();

// export const request = async (options) => {
//     let token
//     const state = store.getState()
//     const userState = state?.user?.currentUser
//     if (userState === null) {
//         token = ""
//     }
//     else {
//         const { accessToken } = userState
//         token = accessToken
//     }
//     // Set the authorization header
//     token !== "" && (client.defaults.headers.common.Authorization = `Bearer ${token}`);

//     const onSuccess = (response) => {
//         return response?.data?.data;
//     };

//     const onError = (error) => {
//         return Promise.reject(error.response?.data);
//     };

//     return client(options).then(onSuccess).catch(onError);
// };

export const externalRequest = async (options: AxiosRequestConfig) => {
  const onSuccess = (response: AxiosResponse) => {
    return response.data;
  };

  const onError = (error: AxiosError) => {
    return Promise.reject(error.response?.data);
  };

  return client(options).then(onSuccess).catch(onError);
};

export const routes = {
  users: {
    authWithPassword:
      "http://127.0.0.1:8090/api/collections/users/auth-with-password",
    refreshToken: "http://127.0.0.1:8090/api/collections/users/auth-refresh",
  },
  weather: {
    weatherForecast: "https://api.open-meteo.com/v1/forecast",
  },
  radio: {
    radioList: "http://127.0.0.1:8090/api/collections/radio_list/records",
  },
  rss: {
    rssList: "http://127.0.0.1:8090/api/collections/rss_collection/records",
  },
};

export const localStorageKeys = {
  auth: {
    authToken: "userAuthToken",
    userName: "userName",
  },
};

export const getAuthKey = () =>
  localStorage.getItem(localStorageKeys.auth.authToken);

export const getAuthName = () =>
  localStorage.getItem(localStorageKeys.auth.userName);
