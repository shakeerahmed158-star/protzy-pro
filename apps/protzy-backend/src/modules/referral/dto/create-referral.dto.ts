export class CreateReferralDto {
  referrerId: string;

  referredUserId?: string;

  referralCode: string;

  rewardAmount?: number;

  status?: string;
}