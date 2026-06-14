import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../../shared/prisma/prisma.service';


import { CreateCommissionDto } from '../dto/create-commission.dto';
import { UpdateCommissionDto } from '../dto/update-commission.dto';
import { CommissionQueryDto } from '../dto/commission-query.dto';

@Injectable()
export class CommissionRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

 async create(data: CreateCommissionDto) {
  return this.prisma.commission.create({
    data: {

      amount: data.amount,

      type: data.type as any,

      ...(data.dealerId && {
        dealer: {
          connect: {
            id: data.dealerId,
          },
        },
      }),

      ...(data.orderId && {
        order: {
          connect: {
            id: data.orderId,
          },
        },
      }),

      ...(data.leadId && {
        lead: {
          connect: {
            id: data.leadId,
          },
        },
      }),
    },
  });
}

///////////////////////////////////////////////////////////

async findAll(query?: CommissionQueryDto) {
  return this.prisma.commission.findMany({
    where: {

      ...(query?.dealerId && {
        dealerId: query.dealerId,
      }),

      ...(query?.orderId && {
        orderId: query.orderId,
      }),

      ...(query?.type && {
        type: query.type as any,
      }),
    },

    orderBy: {
      createdAt: 'desc',
    },
  });
}

///////////////////////////////////////////////////////////

async findById(id: string) {
  return this.prisma.commission.findUnique({
    where: { id },
  });
}

///////////////////////////////////////////////////////////

async update(
  id: string,
  data: UpdateCommissionDto,
) {
  return this.prisma.commission.update({
    where: { id },

    data: {

      ...(data.amount !== undefined && {
        amount: data.amount,
      }),

      ...(data.type && {
        type: data.type as any,
      }),

      ...(data.description && {
        description: data.description,
      }),

      ...(data.dealerId && {
        dealer: {
          connect: {
            id: data.dealerId,
          },
        },
      }),

      ...(data.orderId && {
        order: {
          connect: {
            id: data.orderId,
          },
        },
      }),

      ...(data.leadId && {
        lead: {
          connect: {
            id: data.leadId,
          },
        },
      }),
    },
  });
}
  async delete(id: string) {
    return this.prisma.commission.delete({
      where: { id },
    });
  }

  async dealerCommissions(dealerId: string) {
    return this.prisma.commission.findMany({
      where: {
        dealerId,
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async totalDealerCommission(
    dealerId: string,
  ) {
    return this.prisma.commission.aggregate({
      where: {
        dealerId,
      },

      _sum: {
        amount: true,
      },
    });
  }
}