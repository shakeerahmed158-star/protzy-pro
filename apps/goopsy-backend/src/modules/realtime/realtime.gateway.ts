import {
  WebSocketGateway,
  SubscribeMessage,
  WebSocketServer,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class RealtimeGateway {
  @WebSocketServer()
  server: Server;

  handleConnection(client: Socket) {
    console.log('Client Connected:', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client Disconnected:', client.id);
  }

  @SubscribeMessage('joinRoom')
  handleJoinRoom(
    @MessageBody() room: string,
    @ConnectedSocket() client: Socket,
  ) {
    client.join(room);

    return {
      success: true,
      room,
    };
  }

  sendNotification(room: string, data: any) {
    this.server.to(room).emit('notification', data);
  }
}