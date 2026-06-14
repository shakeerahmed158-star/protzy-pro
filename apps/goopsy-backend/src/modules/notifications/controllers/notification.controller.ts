import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

import { NotificationService } from '../services/notification.service';

@Controller('notifications')
export class NotificationController {
  constructor(
    private readonly notificationService: NotificationService,
  ) {}

  @Get()
  async getNotifications() {
    return this.notificationService.getNotifications();
  }

  @Post('send')
  async sendNotification(
    @Body() body: any,
  ) {
    return this.notificationService.sendNotification(body);
  }

  @Patch('read/:id')
  async markAsRead(
    @Param('id') id: string,
  ) {
    return this.notificationService.markAsRead(id);
  }

  @Delete(':id')
  async deleteNotification(
    @Param('id') id: string,
  ) {
    return this.notificationService.deleteNotification(id);
  }
}