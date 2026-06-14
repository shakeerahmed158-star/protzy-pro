export class FraudResponseDto {
  id: string;

  orderId?: string;

  userId?: string;

  reason: string;

  severity?: string;

  createdAt: Date;
}