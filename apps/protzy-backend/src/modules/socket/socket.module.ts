import { Module } from '@nestjs/common';

import { JwtModule }
from '@nestjs/jwt';

import { SocketGateway }
from './socket.gateway';

import { SocketService }
from './socket.service';

import { SocketAuthGuard }
from './socket-auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret:
        process.env.JWT_SECRET,

      signOptions: {
        expiresIn: '7d',
      },
    }),
  ],

  providers: [
    SocketGateway,
    SocketService,
    SocketAuthGuard,
  ],

  exports: [
    SocketService,
    SocketGateway,
  ],
})

export class SocketModule {}