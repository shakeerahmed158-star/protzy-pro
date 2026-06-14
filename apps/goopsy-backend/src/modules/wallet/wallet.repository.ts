import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Injectable()
export class WalletRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  // CREATE WALLET
  async createWallet(userId: string) {
    return this.prisma.wallet.create({
      data: {
        userId,
        balance: 0,
      },
    });
  }

  // GET WALLET BY USER ID
  async findWalletByUserId(userId: string) {
    return this.prisma.wallet.findUnique({
      where: {
        userId,
      },

      include: {
        transactions: {
          orderBy: {
            createdAt: 'desc',
          },
        },

        dealer: true,
      },
    });
  }

  // CREDIT WALLET
  async creditWallet(
    dealerId: string,
    amount: number,
    description: string,
  ) {
    return this.prisma.$transaction(async (tx) => {

      // FIND DEALER WITH WALLET
      const dealer = await tx.dealer.findUnique({
        where: {
          id: dealerId,
        },

        include: {
          wallet: true,
        },
      });

      if (!dealer || !dealer.wallet) {
        throw new Error('Wallet not found');
      }

      // UPDATE DEALER WALLET BALANCE
      await tx.dealer.update({
        where: {
          id: dealerId,
        },

        data: {
          walletBalance: {
            increment: amount,
          },
        },
      });

      // UPDATE WALLET TABLE BALANCE
      await tx.wallet.update({
        where: {
          id: dealer.wallet.id,
        },

        data: {
          balance: {
            increment: amount,
          },

          totalCredited: {
            increment: amount,
          },
        },
      });

      // CREATE TRANSACTION
      await tx.walletTransaction.create({
        data: {
          walletId: dealer.wallet.id,
          dealerId,
          amount,
          type: 'CREDIT',
          description,
        },
      });

      return dealer;
    });
  }

  // DEBIT WALLET
  async debitWallet(
    dealerId: string,
    amount: number,
    description: string,
  ) {
    return this.prisma.$transaction(async (tx) => {

      // FIND DEALER WITH WALLET
      const dealer = await tx.dealer.findUnique({
        where: {
          id: dealerId,
        },

        include: {
          wallet: true,
        },
      });

      if (!dealer || !dealer.wallet) {
        throw new Error('Wallet not found');
      }

      // UPDATE DEALER BALANCE
      await tx.dealer.update({
        where: {
          id: dealerId,
        },

        data: {
          walletBalance: {
            decrement: amount,
          },
        },
      });

      // UPDATE WALLET TABLE
      await tx.wallet.update({
        where: {
          id: dealer.wallet.id,
        },

        data: {
          balance: {
            decrement: amount,
          },

          totalDebited: {
            increment: amount,
          },
        },
      });

      // CREATE TRANSACTION
      await tx.walletTransaction.create({
        data: {
          walletId: dealer.wallet.id,
          dealerId,
          amount,
          type: 'DEBIT',
          description,
        },
      });

      return dealer;
    });
  }

  // GET TRANSACTIONS
  async getTransactions(dealerId: string) {

    const dealer = await this.prisma.dealer.findUnique({
      where: {
        id: dealerId,
      },

      include: {
        wallet: true,
      },
    });

    if (!dealer || !dealer.wallet) {
      throw new Error('Wallet not found');
    }

    return this.prisma.walletTransaction.findMany({
      where: {
        walletId: dealer.wallet.id,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}