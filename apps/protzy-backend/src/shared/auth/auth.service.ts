import {
  Injectable,
  UnauthorizedException,
  Logger,
  BadRequestException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { AuthRepository } from './auth.repository';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly authRepository: AuthRepository,
    private readonly jwtService: JwtService,
  ) {}

  async register(phone: string) {
    try {
      // Validate phone
      if (!phone || phone.length !== 10) {
        throw new BadRequestException('Valid 10-digit phone number required');
      }

      let user = await this.authRepository.findUserByPhone(phone);

      if (!user) {
        user = await this.authRepository.createUser(phone);
      }

      // Clean token generation - SINGLE source of truth
      const payload = {
        sub: user.id,
        phone: user.phone,
        role: user.role,
      };

      const token = this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '7d',
      });

      // Verify token was generated correctly
      const decoded = this.jwtService.decode(token);
      if (!decoded || !decoded.sub) {
        throw new Error('Token generation failed - invalid payload');
      }

      this.logger.log(`User registered successfully: ${user.id}`);

      return {
        success: true,
        token,
        user: {
          id: user.id,
          name: user.name,
          phone: user.phone,
          role: user.role,
        },
      };
    } catch (error) {
      this.logger.error('Registration failed', error instanceof Error ? error.message : 'Unknown error');
      throw error;
    }
  }

  async sendOtp(phone: string) {
    try {
      // Validate phone
      if (!phone || phone.length !== 10) {
        throw new BadRequestException('Valid 10-digit phone number required');
      }

      const otp = Math.floor(100000 + Math.random() * 900000).toString();

      await this.prisma.user.upsert({
        where: { phone },
        update: {
          otp,
          otpExpiry: new Date(Date.now() + 5 * 60 * 1000),
        },
        create: {
          phone,
          role: 'CUSTOMER',
          otp,
          otpExpiry: new Date(Date.now() + 5 * 60 * 1000),
        },
      });

      this.logger.log(`OTP generated for ${phone}: ${otp}`); // Remove in production

      return {
        success: true,
        message: 'OTP sent successfully',
      };
    } catch (error) {
      this.logger.error('Send OTP failed', error instanceof Error ? error.message : 'Unknown error');
      throw error;
    }
  }

  async verifyOtp(phone: string, otp: string) {
    try {
      // Validate inputs
      if (!phone || phone.length !== 10) {
        throw new BadRequestException('Valid 10-digit phone number required');
      }
      if (!otp || otp.length !== 6) {
        throw new BadRequestException('Valid 6-digit OTP required');
      }

      const user = await this.prisma.user.findUnique({
        where: { phone },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      if (user.isBlocked) {
        throw new UnauthorizedException('Account blocked');
      }

      if (!user.otp || user.otp !== otp) {
        throw new UnauthorizedException('Invalid OTP');
      }

      if (!user.otpExpiry || user.otpExpiry < new Date()) {
        throw new UnauthorizedException('OTP expired');
      }

      // Clear OTP after successful verification
      await this.prisma.user.update({
        where: { id: user.id },
        data: {
          otp: null,
          otpExpiry: null,
        },
      });

      // Generate CLEAN token - NO duplicates, NO corruption
      const payload = {
        sub: user.id,
        phone: user.phone,
        role: user.role,
      };

      const token = this.jwtService.sign(payload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '7d',
      });

      // Validate token before returning
      const decoded = this.jwtService.verify(token, {
        secret: process.env.JWT_SECRET,
      });

      if (!decoded || !decoded.sub) {
        throw new Error('Token validation failed after generation');
      }

      this.logger.log(`User verified successfully: ${user.id}`);
      this.logger.log(`Token length: ${token.length} chars`);

      return {
        success: true,
        token,
        user: {
          id: user.id,
          phone: user.phone,
          role: user.role,
        },
      };
    } catch (error) {
      this.logger.error('Verify OTP failed', error instanceof Error ? error.message : 'Unknown error');
      throw error;
    }
  }

  async getMe(userId: string) {
    try {
      if (!userId) {
        throw new UnauthorizedException('User ID required');
      }

      const user = await this.prisma.user.findUnique({
        where: { id: userId },
        include: {
          dealer: true,
        },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      if (user.isBlocked) {
        throw new UnauthorizedException('Account blocked');
      }

      return {
        success: true,
        user: {
          id: user.id,
          name: user.name,
          phone: user.phone,
          role: user.role,
          isBlocked: user.isBlocked,
          dealer: user.dealer,
        },
      };
    } catch (error) {
      this.logger.error('Get me failed', error instanceof Error ? error.message : 'Unknown error');
      throw error;
    }
  }

  async logout(userId: string) {
    try {
      this.logger.log(`User logged out: ${userId}`);
      return {
        success: true,
        message: 'Logged out successfully',
      };
    } catch (error) {
      this.logger.error('Logout failed', error instanceof Error ? error.message : 'Unknown error');
      throw error;
    }
  }
}