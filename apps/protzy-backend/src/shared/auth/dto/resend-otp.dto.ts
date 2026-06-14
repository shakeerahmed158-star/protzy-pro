import {
  IsNotEmpty,
  IsString,
  Matches,
} from 'class-validator';

export class ResendOtpDto {
  @IsString()
  @IsNotEmpty()
  @Matches(
    /^[6-9]\d{9}$/,
    {
      message:
        'Please enter a valid Indian mobile number',
    },
  )
  phone!: string;
}