export class CreateFeatureFlagDto {
  name: string;

  key: string;

  description?: string;

  enabled?: boolean;

  rolloutPercentage?: number;
}