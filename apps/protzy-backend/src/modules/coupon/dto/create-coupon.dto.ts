export class CreateCouponDto {
  code: string;

  title: string;

  description?: string;

  discountType: string;

  discountValue: number;

  minimumOrderAmount?: number;

  maximumDiscountAmount?: number;

  usageLimit?: number;

  active?: boolean;

  startsAt?: Date;

  expiresAt?: Date;
}