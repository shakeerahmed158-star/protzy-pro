import {
  IsString,
  IsNumber,
  IsNotEmpty,
} from 'class-validator';

export class CreatePricingDto {
  @IsString()
  @IsNotEmpty()
  brand!: string;

  @IsString()
  @IsNotEmpty()
  model!: string;

  @IsString()
  @IsNotEmpty()
  storage!: string;

  @IsNumber()
  basePrice!: number;

  @IsNumber()
  basicDeduction!: number;

  @IsNumber()
  screenDeduction!: number;

  @IsNumber()
  bodyDeduction!: number;

  @IsNumber()
  functionDeduction!: number;

  @IsNumber()
  accessoriesDeduction!: number;

  @IsNumber()
  below3M!: number;

  @IsNumber()
  m3to6!: number;

  @IsNumber()
  m6to11!: number;

  @IsNumber()
  above11!: number;
}