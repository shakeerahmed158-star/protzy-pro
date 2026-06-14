import {
  IsNumber,
  IsOptional,
} from 'class-validator';

export class UpdateWalletDto {
  @IsOptional()
  @IsNumber()
  balance?: number;
}