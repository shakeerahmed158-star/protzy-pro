import {
  IsOptional,
  IsString,
} from 'class-validator';

export class FilterUserDto {
  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  name?: string;
}