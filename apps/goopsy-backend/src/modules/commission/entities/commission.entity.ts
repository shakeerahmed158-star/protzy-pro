export class CommissionEntity {
  id: string;

  dealerId: string;

  orderId: string;

  type: string;

  amount: number;

  note?: string;

  createdAt: Date;

  updatedAt: Date;
}