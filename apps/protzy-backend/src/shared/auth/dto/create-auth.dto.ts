import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class CreateAuthDto {

  @ApiProperty({
    example: '9876543210',
  })

  @IsString()
  @IsNotEmpty()
  @Length(10, 10)
  phone!: string;
}