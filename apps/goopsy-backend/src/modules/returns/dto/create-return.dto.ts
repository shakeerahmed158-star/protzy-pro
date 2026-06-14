export class CreateReturnDto {
  orderId: string;

  orderItemId?: string;

  userId: string;

  reason: string;

  description?: string;

  refundAmount?: number;

  status?: string;
}