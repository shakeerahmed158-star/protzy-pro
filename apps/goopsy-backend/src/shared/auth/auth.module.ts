import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { AuthRepository } from './auth.repository';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { 
        expiresIn: '7d',
        algorithm: 'HS256',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, PrismaService, AuthRepository],
  exports: [AuthService],
})
export class AuthModule {}