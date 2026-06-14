import { Module } from '@nestjs/common';

import { FraudController } from './fraud.controller';
import { FraudService } from './fraud.service';
import { FraudRepository } from './fraud.repository';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  controllers: [FraudController],

  providers: [
    FraudService,
    FraudRepository,
    PrismaService,
  ],

  exports: [
    FraudService,
  ],
})
export class FraudModule {}