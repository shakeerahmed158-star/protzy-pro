import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
  BadRequestException,
} from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('register')
  async register(
    @Body() body: CreateAuthDto,
  ) {
    if (!body?.phone?.trim()) {
      throw new BadRequestException(
        'Phone number is required',
      );
    }

    return this.authService.register(
      body.phone.trim(),
    );
  }

  @Post('send-otp')
  async sendOtp(
    @Body() body: CreateAuthDto,
  ) {
    if (!body?.phone?.trim()) {
      throw new BadRequestException(
        'Phone number is required',
      );
    }

    return this.authService.sendOtp(
      body.phone.trim(),
    );
  }

  @Post('verify-otp')
  async verifyOtp(
    @Body() body: VerifyOtpDto,
  ) {
    if (
      !body?.phone?.trim() ||
      !body?.otp?.trim()
    ) {
      throw new BadRequestException(
        'Phone and OTP are required',
      );
    }

    return this.authService.verifyOtp(
      body.phone.trim(),
      body.otp.trim(),
    );
  }
@ApiBearerAuth('bearer')
@Get('me')
@UseGuards(JwtAuthGuard)
getMe(@Req() req: any) {
  console.log('REQ USER:', req.user);

  return {
    success: true,
    user: req.user,
  };
}
}