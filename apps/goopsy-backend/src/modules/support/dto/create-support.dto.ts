export class CreateSupportDto {
  userId?: string;

  orderId?: string;

  subject: string;

  message: string;

  priority?: string;

  status?: string;
}