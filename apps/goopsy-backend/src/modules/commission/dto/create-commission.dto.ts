import {
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateCommissionDto {

  @IsOptional()
  @IsString()
  dealerId?: string;

  @IsOptional()
  @IsString()
  orderId?: string;

  @IsOptional()
  @IsString()
  leadId?: string;

  @IsString()
  type: string;

  @IsNumber()
  amount: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  note?: string;
}