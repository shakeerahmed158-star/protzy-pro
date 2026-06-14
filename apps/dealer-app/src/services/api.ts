import axios from "axios";

import { getToken } from "../utils/storage";

export const api = axios.create({
  baseURL: "http://192.168.29.244:3001/api/v1",
  timeout: 10000,
});

api.interceptors.request.use(
  async (config) => {
    const token = await getToken();

    if (token) {
      config.headers.Authorization =
        `Bearer ${token}`;
    }

    return config;
  },
);

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(
      "FAILED URL:",
      error.config?.url,
    );

    console.log(
      "STATUS:",
      error.response?.status,
    );

    return Promise.reject(error);
  },
);