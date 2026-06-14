import { Processor, Process } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('otp')
export class OtpQueue {
  
  @Process()
  async handleOtp(job: Job) {

    console.log('Sending OTP:', job.data);

    // future:
    // firebase otp
    // twilio
    // whatsapp otp

    return true;
  }
}