import {
  Injectable,
  Logger,
} from '@nestjs/common';

import {
  InjectQueue,
} from '@nestjs/bullmq';

import {
  Queue,
} from 'bullmq';

@Injectable()

export class NotificationQueue {

  private readonly logger =
    new Logger(
      NotificationQueue.name,
    );

  constructor(
    @InjectQueue(
      'notifications',
    )
    private readonly notificationQueue: Queue,
  ) {}

  async sendNotification(
    data: {
      userId?: string;

      title: string;

      message: string;

      type?: string;
    },
  ) {

    this.logger.log(
      `🔔 Adding Notification Job`,
    );

    return this.notificationQueue.add(

      'SEND_NOTIFICATION',

      data,

      {
        attempts: 3,

        backoff: {
          type: 'exponential',
          delay: 3000,
        },

        removeOnComplete: true,

        removeOnFail: false,
      },
    );
  }
}