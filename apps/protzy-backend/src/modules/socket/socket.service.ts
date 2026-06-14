import { Injectable } from '@nestjs/common';

@Injectable()

export class SocketService {

  getHello() {
    return 'Socket Service Ready';
  }
}