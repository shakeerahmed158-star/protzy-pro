import { api } from "./api";

export const analyticsService = {
  async getDashboard() {
    const { data } = await api.get(
      "/v1/analytics/dashboard"
    );

    return data;
  },

  async getRevenue() {
    const { data } = await api.get(
      "/v1/analytics/revenue"
    );

    return data;
  },

  async getDealers() {
    const { data } = await api.get(
      "/v1/analytics/dealers"
    );

    return data;
  },

  async getInventory() {
    const { data } = await api.get(
      "/v1/analytics/inventory"
    );

    return data;
  },

  async getRepairs() {
    const { data } = await api.get(
      "/v1/analytics/repairs"
    );

    return data;
  },

  async getSubscriptions() {
    const { data } = await api.get(
      "/v1/analytics/subscriptions"
    );

    return data;
  },
};