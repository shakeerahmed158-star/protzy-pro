import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDealerDto {
  @ApiProperty({ example: 'DEL001' })
  @IsString()
  @IsNotEmpty()
  dealerCode: string;

  @ApiProperty({ example: 'SecurePass123' })
  @IsString()
  @IsNotEmpty()
  password: string;
}