import { api } from "./api";

export const dealerService = {
  async getPendingDealers() {
    const { data } = await api.get(
      "/v1/admin/dealers/pending"
    );

    return data;
  },

  async approveDealer(id: string) {
    const { data } = await api.patch(
      `/v1/admin/dealer/approve/${id}`
    );

    return data;
  },

  async rejectDealer(id: string) {
    const { data } = await api.patch(
      `/v1/admin/dealer/reject/${id}`
    );

    return data;
  },
};