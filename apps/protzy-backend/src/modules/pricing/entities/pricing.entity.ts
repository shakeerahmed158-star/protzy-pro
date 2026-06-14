import { DeductionEntity } from './deduction.entity';
import { MarginEntity } from './margin.entity';

export class PricingEntity {
  basePrice!: number;

  evaluatedPrice!: number;

  finalCustomerPrice!: number;

  deductions!: DeductionEntity;

  margin!: MarginEntity;

  ageMultiplier!: number;
}