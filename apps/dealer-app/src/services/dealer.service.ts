import { api } from "./api";

export interface ApplyDealerPayload {
  ownerName: string;
  contactNumber: string;
  alternateNumber?: string;

  shopName: string;
  gstNumber: string;

  panNumber: string;
  aadhaarNumber: string;
  profilePhoto: string;

  state: string;
  city: string;
  area: string;
  pincode: string;
  address: string;

  type: "BUY" | "SELL" | "REPAIR";
}

export const applyDealer = async (
  data: ApplyDealerPayload
) => {
  try {
    const response = await api.post(
      "/dealer/apply",
      data
    );

    return response.data;
  } catch (error) {
    console.log(
      "Apply Dealer Error:",
      error
    );

    throw error;
  }
};

export const getMyDealer = async () => {
  try {
    const response = await api.get(
      "/dealer/me"
    );

    return response.data;
  } catch (error) {
    console.log(
      "Get Dealer Error:",
      error
    );

    throw error;
  }
};