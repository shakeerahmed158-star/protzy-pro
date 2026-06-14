import api from "./axios";

export async function createPickup(
  data: any
) {
  try {
    const response = await api.post(
      "/pickup",
      data
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}