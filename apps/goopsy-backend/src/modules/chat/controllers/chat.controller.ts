import {
  Controller,
  Get,
  Post,
  Param,
  Body,
} from '@nestjs/common';

import { ChatService } from '../services/chat.service';

@Controller('chat')
export class ChatController {
  constructor(
    private readonly chatService: ChatService,
  ) {}

  @Get('conversations')
  async conversations() {
    return this.chatService.conversations();
  }

  @Get('messages/:conversationId')
  async messages(
    @Param('conversationId') conversationId: string,
  ) {
    return this.chatService.messages(conversationId);
  }

  @Post('send')
  async sendMessage(
    @Body() body: any,
  ) {
    return this.chatService.sendMessage(body);
  }
}