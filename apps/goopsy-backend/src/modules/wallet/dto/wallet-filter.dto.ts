import {
  IsOptional,
  IsString,
} from 'class-validator';

export class WalletFilterDto {
  @IsOptional()
  @IsString()
  search?: string;
}