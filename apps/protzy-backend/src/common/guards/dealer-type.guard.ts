import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class DealerTypeGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const allowedTypes = this.reflector.get<string[]>(
      'dealerTypes',
      context.getHandler(),
    );

    if (!allowedTypes) {
      return true; // no restriction
    }

    const req = context.switchToHttp().getRequest();
    const dealer = req.user?.dealer;

    if (!dealer) {
      throw new ForbiddenException('Dealer not found');
    }

    if (!allowedTypes.includes(dealer.type)) {
      throw new ForbiddenException('Access denied');
    }

    return true;
  }
}