import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateOrderDto {
  @IsString()
  @IsNotEmpty()
  leadId!: string;

  @IsOptional()
  @IsString()
  deviceId?: string;

  @IsNumber()
  price!: number;
}