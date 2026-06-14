import { Injectable } from '@nestjs/common';

import { NotificationRepository } from '../repositories/notification.repository';

@Injectable()
export class NotificationService {
  constructor(
    private readonly notificationRepository: NotificationRepository,
  ) {}

  async getNotifications() {
    return this.notificationRepository.getNotifications();
  }

  async sendNotification(
    body: any,
  ) {
    return this.notificationRepository.sendNotification(body);
  }

  async markAsRead(
    id: string,
  ) {
    return this.notificationRepository.markAsRead(id);
  }

  async deleteNotification(
    id: string,
  ) {
    return this.notificationRepository.deleteNotification(id);
  }
}