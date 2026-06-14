export const getOtpExpiry = (minutes = 5): Date => {
  return new Date(Date.now() + minutes * 60 * 1000);
};