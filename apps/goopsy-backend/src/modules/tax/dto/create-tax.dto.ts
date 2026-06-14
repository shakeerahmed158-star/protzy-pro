export class CreateTaxDto {
  name: string;

  code: string;

  percentage: number;

  country?: string;

  state?: string;

  active?: boolean;
}