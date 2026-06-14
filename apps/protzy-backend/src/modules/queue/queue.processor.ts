import {
  Logger,
} from '@nestjs/common';

import {
  Processor,
  WorkerHost,
} from '@nestjs/bullmq';

import {
  Job,
} from 'bullmq';

Processor('notifications')

import { SocketGateway }
from '../socket/socket.gateway';



export class QueueProcessor
  extends WorkerHost
{
  private readonly logger =
    new Logger(
      QueueProcessor.name,
    );
    constructor(
  private readonly socketGateway: SocketGateway,
) {
  super();
}

  async process(
    job: Job<any>,
  ): Promise<any> {

    this.logger.log(
      `🔥 Processing Job: ${job.name}`,
    );

    this.logger.log(
      JSON.stringify(job.data),
    );

    switch (job.name) {

      case 'SEND_NOTIFICATION':

        return this.handleNotification(
          job.data,
        );

      case 'SEND_EMAIL':

        return this.handleEmail(
          job.data,
        );

      case 'SEND_OTP':

        return this.handleOtp(
          job.data,
        );

      default:

        this.logger.warn(
          `⚠️ Unknown Job Type: ${job.name}`,
        );

        return true;
    }
  }

  /*
  |--------------------------------------------------------------------------
  | NOTIFICATION
  |--------------------------------------------------------------------------
  */

  async handleNotification(
    data: any,
  ) {

    this.logger.log(
      `🔔 Sending Notification`,
    );

    this.logger.log(
      JSON.stringify(data),
    );

    if (data.userId) {

  this.socketGateway.sendToUser(

    data.userId,

    'notification',

    {
      title: data.title,
      message: data.message,
      type: data.type,
    },
  );
}

    /*
      SOCKET LOGIC
      PUSH NOTIFICATION
      FCM
      REALTIME EVENTS
    */

    return {
      success: true,
      type: 'notification',
      data,
    };
  }

  /*
  |--------------------------------------------------------------------------
  | EMAIL
  |--------------------------------------------------------------------------
  */

  async handleEmail(
    data: any,
  ) {

    this.logger.log(
      `📧 Sending Email`,
    );

    this.logger.log(
      JSON.stringify(data),
    );

    /*
      NODEMAILER
      RESEND
      AWS SES
      MAILGUN
    */

    return {
      success: true,
      type: 'email',
      data,
    };
  }

  /*
  |--------------------------------------------------------------------------
  | OTP
  |--------------------------------------------------------------------------
  */

  async handleOtp(
    data: any,
  ) {

    this.logger.log(
      `📱 Sending OTP`,
    );

    this.logger.log(
      JSON.stringify(data),
    );

    /*
      TWILIO
      MSG91
      FAST2SMS
      WHATSAPP OTP
    */

    return {
      success: true,
      type: 'otp',
      data,
    };
  }
}