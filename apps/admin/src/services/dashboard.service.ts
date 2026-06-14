import { api } from "./api";

export const getDashboardStats = async () => {
  const { data } = await api.get(
    "/api/v1/admin/dashboard"
  );

  return data;
};