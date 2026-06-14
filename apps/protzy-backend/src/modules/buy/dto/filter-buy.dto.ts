import {
  IsOptional,
  IsString,
} from 'class-validator';

export class FilterBuyDto {
  @IsOptional()
  @IsString()
  dealerId?: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsOptional()
  @IsString()
  condition?: string;
}