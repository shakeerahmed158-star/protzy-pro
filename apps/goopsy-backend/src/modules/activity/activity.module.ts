import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { ActivityController } from './activity.controller';
import { ActivityService } from './activity.service';
import { ActivityRepository } from './activity.repository';

@Module({
  controllers: [ActivityController],

  providers: [
    PrismaService,
    ActivityService,
    ActivityRepository,
  ],

  exports: [
    ActivityService,
    ActivityRepository,
  ],
})
export class ActivityModule {}