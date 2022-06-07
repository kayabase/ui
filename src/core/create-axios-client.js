import Axios from "axios";
import Store from "@/store/store.js";
import get from "lodash/get";
import set from "lodash/set";
import keys from "lodash/keys";
import merge from "lodash/merge";
import filter from "lodash/filter";
import isArray from "lodash/isArray";
import Cookies from "js-cookie";

// import getClientIp from '@/libs/get-client-ip';
import serializeFormData from "./serialize-form-data";

let createdClient = null;

const createClient = () => {
  if (createdClient) return createdClient;

  const client = Axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    transformRequest: [
      (data, headers) => {
        const arrayFields = filter(keys(data), (key) => {
          return isArray(get(data, key));
        });

        const fieldsHasFile = merge(
          filter(keys(data), (key) => {
            const value = get(data, key);
            return !isArray(value) && value instanceof File;
          }),
          filter(arrayFields, (key) => {
            const values = get(data, key);
            return filter(values, (value) => value instanceof File).length;
          })
        );

        if (fieldsHasFile.length) {
          set(headers, "Content-Type", undefined);

          return serializeFormData(data);
        }

        set(headers, "Content-Type", "application/json");

        return JSON.stringify(data);
      },
    ],
  });

  // Add a request interceptor
  client.interceptors.request.use(
    async (config) => {
      const authToken = Store.getters.accessToken;
      const language = Cookies.get("app_lang");
      config.headers["X-Tenant"] = localStorage.getItem("tenant");
      if (language) config.headers["Accept-Language"] = `${language}`;
      if (authToken) config.headers["Authorization"] = `Bearer ${authToken}`;

      // const ipAddress = await getClientIp();
      // if (ipAddress) config.headers['X-Forwarded-For'] = ipAddress;

      return config;
    },
    (error) => Promise.reject(error)
  );

  // Add a response interceptor
  client.interceptors.response.use(
    (response) => response.data,
    async (err) => {
      const res = err.response;
      if (res) {
        const status = get(res, "status");
        const url = get(res, "config.url");
        const method = get(res, "config.method");

        if (
          status === 401 &&
          method === "delete" &&
          url.includes("/oauth/tokens/")
        ) {
          await Store.dispatch("AuthModule/cleanSession", {
            redirectRoute: "auth-login",
          });
        } else if (res.status === 401) {
          await Store.dispatch("AuthModule/logout", {
            redirectRoute: "auth-login",
          });
        }

        return Promise.reject(res);
      }
    }
  );

  createdClient = client;

  return client;
};

export default createClient;
