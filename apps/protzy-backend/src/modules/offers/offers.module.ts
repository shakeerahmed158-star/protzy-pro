import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { OffersController } from './offers.controller';
import { OffersService } from './offers.service';
import { OffersRepository } from './offers.repository';

@Module({
  controllers: [OffersController],

  providers: [
    PrismaService,
    OffersService,
    OffersRepository,
  ],

  exports: [
    OffersService,
    OffersRepository,
  ],
})
export class OffersModule {}