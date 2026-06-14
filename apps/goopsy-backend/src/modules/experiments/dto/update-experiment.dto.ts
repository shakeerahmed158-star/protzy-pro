export class UpdateExperimentDto {
  name?: string;

  description?: string;

  variantA?: string;

  variantB?: string;

  trafficPercentage?: number;

  active?: boolean;
}