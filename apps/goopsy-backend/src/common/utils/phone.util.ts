export const formatPhone = (phone: string): string => {
  return phone.replace(/\D/g, '');
};