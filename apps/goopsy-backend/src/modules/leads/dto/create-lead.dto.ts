import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsNumber,
  IsArray,
} from 'class-validator';

export class CreateLeadDto {

  //////////////////////////////////////////////////////
  // DEVICE
  //////////////////////////////////////////////////////

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsOptional()
  @IsString()
  variant?: string;

  @IsOptional()
  @IsString()
  storage?: string;

  @IsString()
  @IsNotEmpty()
  condition: string;

  //////////////////////////////////////////////////////
  // LOCATION
  //////////////////////////////////////////////////////

  @IsOptional()
  @IsString()
  city?: string;

  @IsOptional()
  @IsString()
  area?: string;

  @IsOptional()
  @IsString()
  pincode?: string;

  //////////////////////////////////////////////////////
  // IMAGES
  //////////////////////////////////////////////////////

  @IsOptional()
  @IsArray()
  images?: string[];

  //////////////////////////////////////////////////////
  // PRICE
  //////////////////////////////////////////////////////

  @IsOptional()
  @IsNumber()
  expectedPrice?: number;
}