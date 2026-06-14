import api from "./axios";

interface GetPriceParams {
  brand: string;
  model: string;
  ram: string;
  storage: string;
  age: string;

  noCall: string;
  touch: string;
  screenOriginal: string;

  scratch: string;
  deadPixel: string;
  dent: string;
  panel: string;

  faceId: string;
  charging: string;
  button: string;

  box: string;
  charger: string;
  cable: string;
}

export async function getFinalPrice(
  params: GetPriceParams
) {
  try {
    const response = await api.get("/price", {
      params,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}