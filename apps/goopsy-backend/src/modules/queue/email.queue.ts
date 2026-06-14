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

export class EmailQueue {

  private readonly logger =
    new Logger(
      EmailQueue.name,
    );

  constructor(
    @InjectQueue(
      'notifications',
    )
    private readonly emailQueue: Queue,
  ) {}

  async sendEmail(
    data: {
      email: string;

      subject: string;

      html?: string;

      text?: string;
    },
  ) {

    this.logger.log(
      `📧 Adding Email Job`,
    );

    return this.emailQueue.add(

      'SEND_EMAIL',

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