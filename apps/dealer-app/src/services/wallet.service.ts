import { api } from "./api";

export const getWallet = async () => {
  const { data } = await api.get("/wallet/me");
  return data;
};

export const getTransactions = async () => {
  const { data } = await api.get("/wallet/transactions");
  return data;
};

export const createRecharge = async (payload: {
  amount: number;
}) => {
  const { data } = await api.post(
    "/wallet/recharge/create",
    payload
  );

  return data;
};

export const verifyRecharge = async (
  payload: any
) => {
  const { data } = await api.post(
    "/wallet/recharge/verify",
    payload
  );

  return data;
};