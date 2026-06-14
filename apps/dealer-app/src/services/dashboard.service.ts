import { api } from "./api";

export const getDealerDashboard = async () => {
  const { data } = await api.get(
    "/orders/dealer/dashboard"
  );

  return data;
};

export const getDealerStats = async () => {
  const { data } = await api.get(
    "/orders/dealer/stats"
  );

  return data;
};

export const getDealerEarnings = async () => {
  const { data } = await api.get(
    "/orders/dealer/earnings"
  );

  return data;
};