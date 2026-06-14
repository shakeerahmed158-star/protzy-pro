import { Module } from '@nestjs/common';

import { BuyController } from './buy.controller';
import { BuyService } from './buy.service';
import { BuyRepository } from './buy.repository';

import { PrismaModule } from '../../shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],

  controllers: [BuyController],

  providers: [BuyService, BuyRepository],

  exports: [BuyService],
})
export class BuyModule {}