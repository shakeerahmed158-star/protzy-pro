import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  healthCheck() {
    return {
      success: true,
      message: 'protzy Backend Running 🚀',
      timestamp: new Date(),
    };
  }

  @Get('health')
  health() {
    return {
      status: 'OK',
      server: 'protzy Backend',
      uptime: process.uptime(),
      timestamp: new Date(),
    };
  }
}