import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsPhoneNumber('IN')
  @IsNotEmpty()
  phone!: string;

  @IsOptional()
  @IsString()
  name?: string;
}