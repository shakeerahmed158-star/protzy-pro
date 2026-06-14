export class CreateExperimentDto {
  name: string;

  key: string;

  description?: string;

  variantA?: string;

  variantB?: string;

  trafficPercentage?: number;

  active?: boolean;
}