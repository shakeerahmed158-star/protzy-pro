import { Module } from '@nestjs/common';

import { DealerService } from './dealer.service';
import { DealerController } from './dealer.controller';
import { DealerRepository } from './dealer.repository';

import { PrismaModule } from '../../shared/prisma/prisma.module';

@Module({
  imports: [PrismaModule],

  controllers: [DealerController],

  providers: [
    DealerService,
    DealerRepository,
  ],

  exports: [
    DealerService,
    DealerRepository,
  ],
})
export class DealerModule {}