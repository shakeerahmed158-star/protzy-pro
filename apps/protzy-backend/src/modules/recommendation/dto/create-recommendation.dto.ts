export class CreateRecommendationDto {
  userId: string;

  productId: string;

  score?: number;

  reason?: string;
}