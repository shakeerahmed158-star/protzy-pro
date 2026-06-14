export class UpdateCouponDto {
  title?: string;

  description?: string;

  discountType?: string;

  discountValue?: number;

  minimumOrderAmount?: number;

  maximumDiscountAmount?: number;

  usageLimit?: number;

  active?: boolean;

  startsAt?: Date;

  expiresAt?: Date;
}