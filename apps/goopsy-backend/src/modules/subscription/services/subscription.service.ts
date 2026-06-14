import { Injectable } from '@nestjs/common';

import { SubscriptionRepository } from '../repositories/subscription.repository';

@Injectable()
export class SubscriptionService {
  constructor(
    private readonly subscriptionRepository: SubscriptionRepository,
  ) {}

  async plans() {
    return this.subscriptionRepository.plans();
  }

  async buyPlan(
    body: any,
  ) {
    return this.subscriptionRepository.buyPlan(body);
  }

  async mySubscription() {
    return this.subscriptionRepository.mySubscription();
  }
}