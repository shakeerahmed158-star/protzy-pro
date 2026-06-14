import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateRepairDto {
  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  model?: string;

  @IsOptional()
  @IsString()
  issue?: string;

  @IsOptional()
  @IsNumber()
  estimatedPrice?: number;
}