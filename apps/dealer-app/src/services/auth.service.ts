import { api } from "./api";

export const sendOtp = async (phone: string) => {
  const response = await api.post(
    "/dealer-auth/login",
    {
      phone,
    }
  );

  return response.data;
};

export const verifyOtp = async (
  phone: string,
  otp: string
) => {
  const response = await api.post(
    "/dealer-auth/verify-otp",
    {
      phone,
      otp,
    }
  );

  return response.data;
};