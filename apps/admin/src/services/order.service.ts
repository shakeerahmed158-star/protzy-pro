import { api } from "./api";

export const orderService = {
  async getOrders() {
    const { data } = await api.get(
      "/v1/orders"
    );

    return data;
  },

  async getOrder(id: string) {
    const { data } = await api.get(
      `/v1/orders/${id}`
    );

    return data;
  },

  async approveOrder(id: string) {
    const { data } = await api.patch(
      `/v1/orders/approve/${id}`
    );

    return data;
  },

  async rejectOrder(id: string) {
    const { data } = await api.patch(
      `/v1/orders/reject/${id}`
    );

    return data;
  },
};