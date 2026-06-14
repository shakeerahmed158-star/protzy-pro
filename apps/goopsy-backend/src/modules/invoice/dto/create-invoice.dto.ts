export class CreateInvoiceDto {
  orderId: string;

  userId: string;

  invoiceNumber: string;

  subtotal: number;

  taxAmount: number;

  totalAmount: number;

  status?: string;

  dueDate?: Date;
}