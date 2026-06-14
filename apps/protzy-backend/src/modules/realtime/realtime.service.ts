import {
  Injectable,
  Logger,
} from '@nestjs/common';

import { SocketGateway }
from '../socket/socket.gateway';

@Injectable()

export class RealtimeService {

  private readonly logger =
    new Logger(
      RealtimeService.name,
    );

  constructor(
    private readonly socketGateway:
      SocketGateway,
  ) {}

  /*
  |--------------------------------------------------------------------------
  | SEND TO SINGLE USER
  |--------------------------------------------------------------------------
  */

  sendToUser(
    userId: string,
    event: string,
    payload: any,
  ) {

    this.logger.log(
      `📡 Sending Event To User: ${userId}`,
    );

    return this.socketGateway.sendToUser(
      userId,
      event,
      payload,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | GLOBAL EVENT
  |--------------------------------------------------------------------------
  */

  broadcast(
    event: string,
    payload: any,
  ) {

    this.logger.log(
      `🌍 Broadcasting Event: ${event}`,
    );

    return this.socketGateway.server.emit(
      event,
      payload,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | CHECK USER ONLINE
  |--------------------------------------------------------------------------
  */

  isUserOnline(
    userId: string,
  ) {

    return this.socketGateway
      .isUserOnline(userId);
  }

  /*
  |--------------------------------------------------------------------------
  | DEALER EVENT
  |--------------------------------------------------------------------------
  */

  sendDealerEvent(
    dealerId: string,
    payload: any,
  ) {

    return this.sendToUser(
      dealerId,
      'dealer_event',
      payload,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | REPAIR EVENT
  |--------------------------------------------------------------------------
  */

  sendRepairUpdate(
    userId: string,
    payload: any,
  ) {

    return this.sendToUser(
      userId,
      'repair_update',
      payload,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | ORDER EVENT
  |--------------------------------------------------------------------------
  */

  sendOrderUpdate(
    userId: string,
    payload: any,
  ) {

    return this.sendToUser(
      userId,
      'order_update',
      payload,
    );
  }

  /*
  |--------------------------------------------------------------------------
  | SYSTEM EVENT
  |--------------------------------------------------------------------------
  */

  sendSystemNotification(
    userId: string,
    payload: any,
  ) {

    return this.sendToUser(
      userId,
      'system_notification',
      payload,
    );
  }
}