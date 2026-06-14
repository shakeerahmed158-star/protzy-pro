export class CreateFraudDto {
  orderId?: string;

  userId?: string;

  reason: string;

  severity?: string;
}