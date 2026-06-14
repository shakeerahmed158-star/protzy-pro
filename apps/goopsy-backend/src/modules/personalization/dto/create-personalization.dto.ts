export class CreatePersonalizationDto {
  userId: string;

  preferredCategory?: string;

  preferredBrand?: string;

  preferredPriceRange?: string;

  recentlyViewed?: string[];

  interests?: string[];
}