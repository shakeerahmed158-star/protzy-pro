import {
  IsArray,
  IsBoolean,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

import { ProductType } from '@prisma/client';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsOptional()
  @IsString()
  slug?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(ProductType)
  category: ProductType;

  @IsArray()
  images: string[];

  @IsOptional()
  @IsBoolean()
  featured?: boolean;

  @IsOptional()
  @IsBoolean()
  warrantyAvailable?: boolean;

  @IsOptional()
  @IsBoolean()
  emiAvailable?: boolean;
}