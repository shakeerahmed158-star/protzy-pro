export class CreateLoyaltyDto {
  userId: string;

  points?: number;

  level?: string;

  totalEarned?: number;

  totalRedeemed?: number;
}