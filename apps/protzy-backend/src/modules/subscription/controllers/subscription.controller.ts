import {
  Controller,
  Get,
  Post,
  Body,
} from '@nestjs/common';

import { SubscriptionService } from '../services/subscription.service';

@Controller('subscription')
export class SubscriptionController {
  constructor(
    private readonly subscriptionService: SubscriptionService,
  ) {}

  @Get('plans')
  async plans() {
    return this.subscriptionService.plans();
  }

  @Post('buy')
  async buyPlan(
    @Body() body: any,
  ) {
    return this.subscriptionService.buyPlan(body);
  }

  @Get('my')
  async mySubscription() {
    return this.subscriptionService.mySubscription();
  }
}