import { Injectable } from '@nestjs/common';

import { ChatRepository } from '../repositories/chat.repository';

@Injectable()
export class ChatService {
  constructor(
    private readonly chatRepository: ChatRepository,
  ) {}

  async conversations() {
    return this.chatRepository.conversations();
  }

  async messages(
    conversationId: string,
  ) {
    return this.chatRepository.messages(conversationId);
  }

  async sendMessage(
    body: any,
  ) {
    return this.chatRepository.sendMessage(body);
  }
}