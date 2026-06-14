import { api } from "./api";

export const leadService = {
  async getLeads() {
    const { data } = await api.get(
      "/v1/lead"
    );

    return data;
  },

  async assignLead(
    id: string,
    payload: any
  ) {
    const { data } = await api.patch(
      `/v1/lead/assign/${id}`,
      payload
    );

    return data;
  },

  async acceptLead(id: string) {
    const { data } = await api.patch(
      `/v1/lead/accept/${id}`,
      {}
    );

    return data;
  },

  async rejectLead(id: string) {
    const { data } = await api.patch(
      `/v1/lead/reject/${id}`,
      {}
    );

    return data;
  },

  async closeLead(id: string) {
    const { data } = await api.patch(
      `/v1/lead/close/${id}`,
      {}
    );

    return data;
  },
};