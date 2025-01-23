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
  },
  weather: {
    weatherForecast: "https://api.open-meteo.com/v1/forecast",
  },
  radio: {
    radioList: "http://127.0.0.1:8090/api/collections/radio_list/records",
  },
};
