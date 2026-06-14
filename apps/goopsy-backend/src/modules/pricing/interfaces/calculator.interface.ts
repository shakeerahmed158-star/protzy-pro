export interface PriceCalculationResult {
  basePrice: number;

  finalPrice: number;

  platformFee: number;

  customerFinalPrice: number;

  deductions: {
    screen: number;
    body: number;
    functional: number;
    accessories: number;
    total: number;
  };

  ageMultiplier: number;
}