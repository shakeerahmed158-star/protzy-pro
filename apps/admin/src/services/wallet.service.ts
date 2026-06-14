import { api } from "./api";

export const walletService = {
  async getWallet() {
    const { data } = await api.get(
      "/v1/wallet/me"
    );

    return data;
  },

  async getTransactions() {
    const { data } = await api.get(
      "/v1/wallet/transactions"
    );

    return data;
  },

  async creditWallet(payload: any) {
    const { data } = await api.patch(
      "/v1/wallet/credit",
      payload
    );

    return data;
  },

  async debitWallet(payload: any) {
    const { data } = await api.patch(
      "/v1/wallet/debit",
      payload
    );

    return data;
  },
};