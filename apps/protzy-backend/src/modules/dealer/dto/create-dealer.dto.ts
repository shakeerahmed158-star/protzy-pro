import {
  IsEnum,
  IsNotEmpty,
  IsString,
  IsOptional,
} from 'class-validator';

export class CreateDealerDto {
  @IsString()
  @IsNotEmpty()
  ownerName: string;

  @IsString()
  @IsNotEmpty()
  contactNumber: string;

  @IsOptional()
  @IsString()
  alternateNumber?: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  shopName: string;

  @IsString()
  @IsNotEmpty()
  gstNumber: string;

  @IsString()
  @IsNotEmpty()
  panNumber: string;

  @IsString()
  @IsNotEmpty()
  aadhaarNumber: string;

  @IsString()
  @IsNotEmpty()
  profilePhoto: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  area: string;

  @IsString()
  @IsNotEmpty()
  pincode: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsEnum([
    'BUY',
    'SELL',
    'REPAIR',
  ])
  type!: 'BUY' | 'SELL' | 'REPAIR';
}