import { IsString } from 'class-validator';

export class CalculatePriceDto {

  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsString()
  storage: string;

  @IsString()
  condition: string;

  @IsString()
  deviceAge: string;

}