import axios from "axios";
import ENV from "../../lib/config/env";

const api = axios.create({
  baseURL:"http://localhost:3000",

  headers: {
    "Content-Type": "application/json",
  },

  timeout: 15000,
});

// REQUEST INTERCEPTOR
api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("token")
        : null;

    if (token) {
      config.headers.Authorization =
        `Bearer ${token};`
    }

    return config;
  },

  (error) => {
    return Promise.reject(error);
  }
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
  (response) => response,

  (error) => {
    console.log(
      "API ERROR:",
      error?.response || error
    );

    return Promise.reject(error);
  }
);

export default api;