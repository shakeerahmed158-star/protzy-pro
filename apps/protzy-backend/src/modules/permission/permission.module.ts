import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { PermissionController } from './permission.controller';
import { PermissionService } from './permission.service';
import { PermissionRepository } from './permission.repository';

@Module({
  controllers: [PermissionController],

  providers: [
    PrismaService,
    PermissionService,
    PermissionRepository,
  ],

  exports: [
    PermissionService,
    PermissionRepository,
  ],
})
export class PermissionModule {}