import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: any) {
    const request = context.switchToHttp().getRequest();

    console.log(
      'AUTH HEADER:',
      request.headers.authorization,
    );

    return super.canActivate(context);
  }
}