import {
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class DebitWalletDto {
  @IsNumber()
  @IsPositive()
  amount!: number;

  @IsString()
  @MinLength(3)
  description!: string;
}