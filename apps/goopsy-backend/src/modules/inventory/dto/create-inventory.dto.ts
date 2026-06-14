import {
  IsString,
  IsNumber,
  IsBoolean,
} from 'class-validator';

export class CreateInventoryDto {

  @IsString()
  brand: string;

  @IsString()
  model: string;

  @IsString()
  storage: string;

  @IsString()
  color: string;

  @IsNumber()
  batteryHealth: number;

  @IsString()
  condition: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  purchasePrice: number;

  @IsNumber()
  sellingPrice: number;

  @IsString()
  imei: string;

  @IsString()
  status: string;

  @IsBoolean()
  available: boolean;

  @IsBoolean()
  reserved: boolean;

  @IsBoolean()
  sold: boolean;
}