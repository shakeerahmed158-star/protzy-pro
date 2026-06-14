import {
  IsArray,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBuyDto {
  @IsString()
  productId: string;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  stock?: number;

  @IsOptional()
  @IsNumber()
  offerPrice?: number;

  @IsOptional()
  @IsNumber()
  finalPrice?: number;

  @IsOptional()
  @IsNumber()
  commissionPercent?: number;

  @IsOptional()
  @IsString()
  ram?: string;

  @IsOptional()
  @IsString()
  storage?: string;

  @IsOptional()
  @IsString()
  color?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  images?: string[];
}