import { api } from "./api";

export const inventoryService = {
  async getInventory() {
    const { data } = await api.get(
      "/v1/inventory/my"
    );

    return data;
  },

  async addInventory(payload: any) {
    const { data } = await api.post(
      "/v1/inventory/add",
      payload
    );

    return data;
  },

  async updateInventory(
    id: string,
    payload: any
  ) {
    const { data } = await api.patch(
      `/v1/inventory/update/${id}`,
      payload
    );

    return data;
  },

  async deleteInventory(id: string) {
    const { data } = await api.delete(
      `/v1/inventory/delete/${id}`
    );

    return data;
  },
};