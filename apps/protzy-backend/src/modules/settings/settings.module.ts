import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';
import { SettingsRepository } from './settings.repository';

@Module({
  controllers: [SettingsController],

  providers: [
    PrismaService,
    SettingsService,
    SettingsRepository,
  ],

  exports: [
    SettingsService,
    SettingsRepository,
  ],
})
export class SettingsModule {}