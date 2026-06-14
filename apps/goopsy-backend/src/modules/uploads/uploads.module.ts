import { Module } from '@nestjs/common';

import { UploadsController } from './uploads.controller';
import { UploadsService } from './uploads.service';
import { UploadsRepository } from './uploads.repository';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { StorageModule } from '../storage/storage.module';

@Module({
  imports: [
    StorageModule,
  ],

  controllers: [
    UploadsController,
  ],

  providers: [
    UploadsService,
    UploadsRepository,
    PrismaService,
  ],

  exports: [
    UploadsService,
  ],
})
export class UploadsModule {}