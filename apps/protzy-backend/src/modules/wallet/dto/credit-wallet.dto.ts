import {
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreditWalletDto {
  @IsNumber()
  @IsPositive()
  amount!: number;

  @IsString()
  @MinLength(3)
  description!: string;
}