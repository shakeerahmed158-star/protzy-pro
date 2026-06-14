export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function formatNumber(value: number) {
  return new Intl.NumberFormat("en-IN").format(value);
}

export function formatCompactNumber(value: number) {
  return new Intl.NumberFormat("en-IN", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export function truncate(text: string, length = 50) {
  if (text.length <= length) return text;

  return `${text.slice(0, length)}...`;
}