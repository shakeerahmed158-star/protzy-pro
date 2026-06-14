export class UpdateInvoiceDto {
  subtotal?: number;

  taxAmount?: number;

  totalAmount?: number;

  status?: string;

  paidAt?: Date;

  dueDate?: Date;
}