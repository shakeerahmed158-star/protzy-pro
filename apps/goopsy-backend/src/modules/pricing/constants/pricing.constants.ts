export const PLATFORM_FEES = {
  BELOW_10K: 500,
  BELOW_30K: 1500,
  BELOW_60K: 2500,
  ABOVE_60K: 4000,
};

export const DEVICE_AGE_MULTIPLIERS = {
  BELOW_3_MONTHS: 1,
  MONTH_3_TO_6: 0.92,
  MONTH_6_TO_11: 0.82,
  ABOVE_11: 0.7,
};

export const PRICING_LIMITS = {
  MIN_PRICE: 0,
};

export const SOCKET_EVENTS = {
  PRICE_UPDATED: 'price.updated',
  LEAD_CREATED: 'lead.created',
  DEALER_ASSIGNED: 'dealer.assigned',
};