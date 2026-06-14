import { ApiProperty } from '@nestjs/swagger';

import {
IsNotEmpty,
IsString,
Length,
Matches,
} from 'class-validator';

export class LoginDto {
@ApiProperty({
example: '9876543210',
description:
'Registered mobile number',
})
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

@ApiProperty({
example: '123456',
description:
'6 digit OTP',
})
@IsString()
@IsNotEmpty()
@Length(6, 6, {
message:
'OTP must be exactly 6 digits',
})
otp!: string;
}