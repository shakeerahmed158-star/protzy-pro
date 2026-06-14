export class UpdatePayoutDto {
  amount?: number;

  method?: string;

  transactionId?: string;

  status?: string;

  remarks?: string;

  processedAt?: Date;
}