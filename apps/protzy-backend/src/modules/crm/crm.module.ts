import { Module } from '@nestjs/common';

import { CrmController } from './crm.controller';
import { CrmService } from './crm.service';
import { CrmRepository } from './crm.repository';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  controllers: [CrmController],

  providers: [
    CrmService,
    CrmRepository,
    PrismaService,
  ],

  exports: [
    CrmService,
  ],
})
export class CrmModule {}