import { Injectable } from '@nestjs/common';

@Injectable()
export class ChatRepository {

  async conversations() {
    return [
      {
        id: 1,
        user: 'Dealer',
        lastMessage: 'Hello',
      },
    ];
  }

  async messages(
    conversationId: string,
  ) {
    return [
      {
        id: 1,
        conversationId,
        sender: 'Dealer',
        message: 'Chat module working',
      },
    ];
  }

  async sendMessage(
    body: any,
  ) {
    return {
      success: true,
      message: 'Message sent successfully',
      data: body,
    };
  }
}