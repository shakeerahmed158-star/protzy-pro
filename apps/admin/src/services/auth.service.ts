import { api } from "./api";

export const authService = {
  async login(
    username: string,
    password: string,
  ) {
    const { data } = await api.post(
      "/v1/admin-auth/login",
      {
        username,
        password,
      }
    );

    return data;
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("admin");
  },
};