import {
  Logger,
} from '@nestjs/common';

import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';

import {
  Server,
  Socket,
} from 'socket.io';

import {
  UseGuards,
} from '@nestjs/common';

import { SocketAuthGuard }
from './socket-auth.guard';




@WebSocketGateway({
  cors: {
    origin: '*',
  },

  namespace: '/realtime',
})

export class SocketGateway
  implements
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect
{
  private readonly logger =
    new Logger(SocketGateway.name);

  private onlineUsers =
  new Map<string, string>();

  @WebSocketServer()
  server: Server;

  /**
   * AFTER INIT
   */
  afterInit() {
    this.logger.log(
      '🔥 Socket Server Initialized',
    );
  }

/**
 * CONNECTION
 */

@UseGuards(SocketAuthGuard)

handleConnection(
  client: Socket,
) {

  const user =
    (client as any).user;

  /*
  |--------------------------------------------------------------------------
  | STORE ONLINE USER
  |--------------------------------------------------------------------------
  */

  this.onlineUsers.set(
    user.id,
    client.id,
  );

  /*
  |--------------------------------------------------------------------------
  | JOIN USER ROOM
  |--------------------------------------------------------------------------
  */

  client.join(
    `user_${user.id}`,
  );

  /*
  |--------------------------------------------------------------------------
  | BROADCAST USER ONLINE
  |--------------------------------------------------------------------------
  */

  this.server.emit(
    'user_online',

    {
      userId: user.id,
    },
  );

  /*
  |--------------------------------------------------------------------------
  | LOG CONNECTION
  |--------------------------------------------------------------------------
  */

  this.logger.log(
    `✅ User Connected: ${user.id}`,
  );

  /*
  |--------------------------------------------------------------------------
  | SEND CONNECTED EVENT
  |--------------------------------------------------------------------------
  */

  client.emit(
    'connected',

    {
      success: true,

      userId: user.id,

      socketId: client.id,
    },
  );
}
/**
 * DISCONNECT
 */
handleDisconnect(
  client: Socket,
) {

  const user =
    (client as any).user;

  if (user?.id) {

    this.onlineUsers.delete(
      user.id,
    );

    this.server.emit(
      'user_offline',

      {
        userId: user.id,
      },
    );

    this.logger.log(
      `❌ User Offline: ${user.id}`,
    );
  }

  this.logger.log(
    `❌ Client Disconnected`,
  );
}

/**
 * SEND EVENT TO SINGLE USER
 */
sendToUser(
  userId: string,
  event: string,
  data: any,
) {

  this.server
    .to(`user_${userId}`)
    .emit(
      event,
      data,
    );

  this.logger.log(
    `📡 Event Sent To User: ${userId}`,
  );

  return true;
}

/**
 * CHECK USER ONLINE STATUS
 */
isUserOnline(
  userId: string,
) {

  return this.onlineUsers.has(
    userId,
  );
}



  /**
   * TEST EVENT
   */
  @SubscribeMessage('ping')

  handlePing(
    @MessageBody() data: any,

    @ConnectedSocket()
    client: Socket,
  ) {
    this.logger.log(
      `PING FROM ${client.id}`,
    );

    return {
      event: 'pong',
      data,
    };
  }

  /**
   * GLOBAL NOTIFICATION
   */
  @SubscribeMessage(
    'send_notification',
  )

  sendNotification(
    @MessageBody() payload: any,
  ) {
    this.server.emit(
      'receive_notification',
      payload,
    );

    return {
      success: true,
    };
  }
}