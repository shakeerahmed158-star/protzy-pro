import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  checkHealth() {
    return {
      success: true,
      status: 'ok',
      service: 'protzy Backend',
      message: 'Backend is running successfully',
      timestamp: new Date().toISOString(),
    };
  }
}