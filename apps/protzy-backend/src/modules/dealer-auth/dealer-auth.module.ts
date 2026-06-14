import { Module } from '@nestjs/common';

import { JwtModule } from '@nestjs/jwt';

import { DealerModule } from '../dealer/dealer.module';

import { DealerAuthController } from './dealer-auth.controller';

import { DealerAuthService } from './dealer-auth.service';

@Module({
  imports: [
    DealerModule,

    JwtModule.register({
      secret: process.env.JWT_SECRET,

      signOptions: {
        expiresIn: '7d',
      },
    }),
  ],

  controllers: [
    DealerAuthController,
  ],

  providers: [
    DealerAuthService,
  ],

  exports: [
    DealerAuthService,
    JwtModule,
  ],
})
export class DealerAuthModule {}