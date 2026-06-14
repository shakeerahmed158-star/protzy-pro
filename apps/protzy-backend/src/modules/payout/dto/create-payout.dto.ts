export class CreatePayoutDto {
  vendorId?: string;

  dealerId?: string;

  amount: number;

  method?: string;

  transactionId?: string;

  status?: string;

  remarks?: string;
}