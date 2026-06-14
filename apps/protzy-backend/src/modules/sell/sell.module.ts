import { Module } from '@nestjs/common';

import { SellController } from './sell.controller';
import { SellService } from './sell.service';
import { SellRepository } from './sell.repository';

import { PrismaModule } from '../../shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],

  controllers: [SellController],

  providers: [
    SellService,
    SellRepository,
  ],

  exports: [SellService],
})
export class SellModule {}