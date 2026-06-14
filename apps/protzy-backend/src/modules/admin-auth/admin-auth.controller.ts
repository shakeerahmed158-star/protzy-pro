import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';

import { AdminAuthService } from './admin-auth.service';

@Controller('admin-auth')
export class AdminAuthController {
  constructor(
    private readonly authService: AdminAuthService,
  ) {}

  @Post('login')
  login(
    @Body()
    body: {
      username: string;
      password: string;
    },
  ) {
    return this.authService.login(
      body.username,
      body.password,
    );
  }
}