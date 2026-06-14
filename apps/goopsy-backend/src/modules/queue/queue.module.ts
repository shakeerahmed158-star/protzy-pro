import { Module } from '@nestjs/common';

import { QueueController } from './queue.controller';
import { QueueService } from './queue.service';
import { QueueRepository } from './queue.repository';
import { QueueProcessor } from './queue.processor';
import { BullModule }
from '@nestjs/bullmq';
import { NotificationQueue }
from './notification.queue';

import { EmailQueue }
from './email.queue';
import { SocketModule }
from '../socket/socket.module';

import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
     imports: [
      SocketModule,
        
    BullModule.forRoot({
      connection: {
        host: 'goopsy-redis',
        port: 6379,
      },
    }),

    BullModule.registerQueue({
      name: 'notifications',
    }),
  ],
  controllers: [QueueController],

  providers: [
    QueueService,
    QueueRepository,
    QueueProcessor,
    PrismaService,

    NotificationQueue,
    EmailQueue,
  ],

  exports: [
    QueueService,
  ],
})
export class QueueModule {}