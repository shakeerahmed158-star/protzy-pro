import { api } from "./api";

export const getMyLeads = async () => {
  const { data } = await api.get(
    "/lead/dealer/my"
  );

  return data;
};

export const acceptLead = async (
  id: string
) => {
  const { data } = await api.patch(
    `/lead/accept/${id}`
  );

  return data;
};

export const rejectLead = async (
  id: string
) => {
  const { data } = await api.patch(
    `/lead/reject/${id}`
  );

  return data;
};

export const closeLead = async (
  id: string
) => {
  const { data } = await api.patch(
    `/lead/close/${id}`
  );

  return data;
};