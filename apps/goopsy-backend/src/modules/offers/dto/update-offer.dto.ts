export class UpdateOfferDto {
  title?: string;

  slug?: string;

  description?: string;

  discountType?: string;

  discountValue?: number;

  banner?: string;

  startDate?: Date;

  endDate?: Date;

  active?: boolean;
}