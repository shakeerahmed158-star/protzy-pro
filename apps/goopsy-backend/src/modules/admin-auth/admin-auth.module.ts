import { Module } from '@nestjs/common';

import { PrismaModule } from '../../shared/prisma/prisma.module';

import { JwtModule } from '@nestjs/jwt';

import { AdminAuthController } from './admin-auth.controller';
import { AdminAuthService } from './admin-auth.service';

@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],

  controllers: [
    AdminAuthController,
  ],

  providers: [
    AdminAuthService,
  ],
})
export class AdminAuthModule {}