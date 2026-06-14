import {
  IsOptional,
  IsString,
} from 'class-validator';

export class CommissionQueryDto {
  @IsOptional()
  @IsString()
  dealerId?: string;

  @IsOptional()
  @IsString()
  orderId?: string;

  @IsOptional()
  @IsString()
  type?: string;
}