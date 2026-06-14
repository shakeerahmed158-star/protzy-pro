import { api } from "./api";

export const getInventory = async () => {
  const { data } = await api.get(
    "/inventory/my"
  );

  return data;
};

export const addInventory = async (
  payload: any
) => {
  const { data } = await api.post(
    "/inventory/add",
    payload
  );

  return data;
};

export const updateInventory = async (
  id: string,
  payload: any
) => {
  const { data } = await api.patch(
    `/inventory/update/${id}`,
    payload
  );

  return data;
};

export const deleteInventory = async (
  id: string
) => {
  const { data } = await api.delete(
    `/inventory/delete/${id}`
  );

  return data;
};