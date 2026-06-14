import api from "./axios";

export async function getDevices(
  brand: string
) {
  try {
    const response = await api.get(
      `/devices/${brand}`
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}