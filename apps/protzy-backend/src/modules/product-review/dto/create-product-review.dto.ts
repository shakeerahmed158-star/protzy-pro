export class CreateProductReviewDto {
  userId: string;

  productId: string;

  rating: number;

  review?: string;
}