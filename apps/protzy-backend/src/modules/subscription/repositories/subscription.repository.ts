import { Injectable } from '@nestjs/common';

@Injectable()
export class SubscriptionRepository {

  async plans() {
    return [
      {
        id: 1,
        name: 'Basic Plan',
        price: 999,
      },
      {
        id: 2,
        name: 'Premium Plan',
        price: 2999,
      },
    ];
  }

  async buyPlan(
    body: any,
  ) {
    return {
      success: true,
      message: 'Subscription purchased successfully',
      data: body,
    };
  }

  async mySubscription() {
    return {
      id: 1,
      plan: 'Premium Plan',
      status: 'active',
    };
  }
}