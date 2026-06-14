import {
  IsOptional,
  IsString,
} from 'class-validator';

export class FilterOrderDto {
  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  dealerId?: string;

  @IsOptional()
  @IsString()
  userId?: string;
}