import {
  Body,
  Controller,
  Post,
} from '@nestjs/common';

import { DealerAuthService }
from './dealer-auth.service';

import { LoginDealerDto }
from './dto/login-dealer-auth.dto';

@Controller('dealer-auth')
export class DealerAuthController {
  constructor(
    private readonly dealerAuthService:
      DealerAuthService,
  ) {}

  @Post('login')
  login(
    @Body()
    body: LoginDealerDto,
  ) {
    return this.dealerAuthService.login(
      body.dealerCode,
      body.password,
    );
  }
}