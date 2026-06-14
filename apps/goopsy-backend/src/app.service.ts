import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getServerStatus() {
    return {
      success: true,
      message: 'Backend running successfully',
    };
  }
}