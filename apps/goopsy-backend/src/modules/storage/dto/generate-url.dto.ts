import {
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class GenerateUrlDto {
  @IsString()
  @IsNotEmpty()
  bucket: string;

  @IsString()
  @IsNotEmpty()
  fileName: string;
}