export class UpdateFeatureFlagDto {
  name?: string;

  description?: string;

  enabled?: boolean;

  rolloutPercentage?: number;
}