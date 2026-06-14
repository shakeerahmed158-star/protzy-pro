import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  async sendEmail(
    to: string,
    subject: string,
    text: string,
  ) {
    console.log(
      `Sending email to ${to}: ${subject}`,
    );

    return true;
  }
}