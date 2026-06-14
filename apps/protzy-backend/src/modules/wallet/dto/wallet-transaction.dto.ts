export class WalletTransactionDto {
  id!: string;

  walletId!: string;

  amount!: number;

  type!: string;

  description?: string;

  createdAt!: Date;
}