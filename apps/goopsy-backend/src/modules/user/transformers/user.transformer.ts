export const sanitizeUser = (user: any) => {
  if (!user) return null;

  const { otp, otpExpiry, ...safeUser } = user;
  return safeUser;
};