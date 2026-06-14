import { Injectable } from '@nestjs/common';



@Injectable()
export class NotificationRepository {

  async getNotifications() {
    return [
      {
        id: 1,
        title: 'Welcome',
        message: 'Notification module working',
        read: false,
      },
    ];
  }

  async sendNotification(
    body: any,
  ) {
    return {
      success: true,
      message: 'Notification sent successfully',
      data: body,
    };
  }

  async markAsRead(
    id: string,
  ) {
    return {
      success: true,
      message: `Notification ${id} marked as read`,
    };
  }

  async deleteNotification(
    id: string,
  ) {
    return {
      success: true,
      message: `Notification ${id} deleted`,
    };
  }
}