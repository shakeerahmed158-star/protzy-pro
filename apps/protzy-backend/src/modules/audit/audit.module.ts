import { Module } from '@nestjs/common';

import { AuditController } from './audit.controller';
import { AuditService } from './audit.service';
import { AuditRepository } from './audit.repository';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  controllers: [AuditController],

  providers: [
    AuditService,
    AuditRepository,
    PrismaService,
  ],

  exports: [
    AuditService,
  ],
})
export class AuditModule {}