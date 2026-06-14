import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  Length,
} from 'class-validator';

export class VerifyOtpDto {
  @ApiProperty({
    example: '9876543210',
  })
  @IsString()
  @IsNotEmpty()
  @Length(10, 10)
  phone!: string;

  @ApiProperty({
    example: '123456',
  })
  @IsString()
  @IsNotEmpty()
  @Length(6, 6)
  otp!: string;
}