import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
} from 'class-validator';

import { Type } from 'class-transformer';

export class CreateSellDto {
  @IsString()
  @IsNotEmpty()
  brand!: string;

  @IsString()
  @IsNotEmpty()
  model!: string;

  @IsOptional()
  @IsString()
  variant?: string;

  @IsOptional()
  @IsString()
  storage?: string;

  @IsString()
  @IsNotEmpty()
  condition!: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  expectedPrice?: number;

  @IsOptional()
  @IsString()
  location?: string;
}