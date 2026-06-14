import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';
import { WorkflowStatus } from '@prisma/client';

import { OrdersRepository } from './orders.repository';

import { UpdateOrderDto } from './dto/update-orders.dto';
import { FilterOrderDto } from './dto/filter-orders.dto';
import { PaymentStatus } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(
    private readonly prisma: PrismaService,

    private readonly ordersRepository: OrdersRepository,
  ) {}

async getAllBuyOrders() {
  return this.prisma.buyOrder.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}

async assignBuyDealer(
  orderId: string,
  dealerId: string,
) {
  return this.prisma.buyOrder.update({
    where: {
      id: orderId,
    },

    data: {
      assignedDealerId: dealerId,
      status: 'ASSIGNED',
    },
  });
}

async acceptBuyOrder(
  orderId: string,
) {
  return this.prisma.buyOrder.update({
    where: {
      id: orderId,
    },

    data: {
      status: 'CONFIRMED',
    },
  });
}

async rejectBuyOrder(
  orderId: string,
) {
  return this.prisma.buyOrder.update({
    where: {
      id: orderId,
    },

    data: {
      status: WorkflowStatus.REJECTED,
      assignedDealerId: null,
    },
  });
}

async markOutForDelivery(
  orderId: string,
) {

  const otp = this.generateOtp();

  return this.prisma.buyOrder.update({
    where: {
      id: orderId,
    },

    data: {
     status: WorkflowStatus.OUT_FOR_DELIVERY,

      deliveryOtp: otp,
    },
  });
}

async markDelivered(
  orderId: string,
) {

  const order =
    await this.prisma.buyOrder.findUnique({
      where: {
        id: orderId,
      },

      include: {
        device: true,
      },
    });

  if (!order) {
    throw new Error('Order not found');
  }

const sellingPrice =
  order.device.basePrice;

const commissionRate = 0.05;

const platformFee =
  sellingPrice * commissionRate;

const dealerEarning =
  sellingPrice - platformFee;


  // UPDATE ORDER
  await this.prisma.buyOrder.update({
    where: {
      id: orderId,
    },

    data: {
      status: 'COMPLETED',
      deliveredAt: new Date(),

      paymentStatus: 'PENDING',

      dealerEarning,
      platformFee,

      device: {
        update: {
        },
      },
    },
  });

  // UPDATE DEALER WALLET
  await this.prisma.dealer.update({
    where: {
      id: order.assignedDealerId!,
    },

    data: {
        walletBalance: {
        increment: dealerEarning,
      },

      totalEarnings: {
        increment: dealerEarning,
      },
    },
  });

  // CREATE WALLET ENTRY
const wallet =
  await this.prisma.wallet.findFirst({
    where: {
      userId: order.assignedDealerId,
    },
  });

await this.prisma.walletTransaction.create({
  data: {
    walletId: wallet!.id,

    amount: dealerEarning,

    type: 'CREDIT',

    description: `Earning from order ${order.id}`,
  },
});

return {
  success: true,
};
}

generateOtp() {
  return Math.floor(
    1000 + Math.random() * 9000,
  ).toString();
}


async verifyDeliveryOtp(
  orderId: string,
  otp: string,
) {
  const order =
    await this.prisma.buyOrder.findUnique({
      where: {
        id: orderId,
      },
    });

  if (!order) {
    throw new Error('Order not found');
  }

  // TEMP OTP CHECK
  if (otp !== 'OTP') {
    throw new Error('Invalid OTP');
  }

  return this.prisma.buyOrder.update({
    where: {
      id: orderId,
    },

    data: {
      status: 'COMPLETED',

      deliveredAt: new Date(),
    },
  });
}

async completeBuyOrder(
  orderId: string,
) {
  return this.prisma.buyOrder.update({
    where: {
      id: orderId,
    },

    data: {
      status: 'COMPLETED',
      completedAt: new Date(),
    },
  });
}

  // ✅ USER ORDERS
  async getUserOrders(userId: string) {
    return this.ordersRepository.findAll({
      userId,
    });
  }

  // ✅ DEALER ORDERS
  async getDealerOrders(userId: string) {
    const dealer =
      await this.prisma.dealer.findUnique({
        where: {
          userId,
        },
      });

    if (!dealer) {
      throw new NotFoundException(
        'Dealer not found',
      );
    }

    return this.ordersRepository.findAll({
      dealerId: dealer.id,
    });
  }

  // 🔥 SINGLE ORDER
  async findOne(id: string) {
    const order =
      await this.ordersRepository.findById(
        id,
      );

    if (!order) {
      throw new NotFoundException(
        'Order not found',
      );
    }

    return order;
  }

  // ✏️ UPDATE ORDER
  async update(
    id: string,
    dto: UpdateOrderDto,
  ) {
    return this.ordersRepository.update(
      id,
      dto,
    );
  }

  // ✅ APPROVE ORDER
  async approveOrder(
    orderId: string,
    userId: string,
  ) {
    const dealer =
      await this.prisma.dealer.findUnique({
        where: {
          userId,
        },
      });

    if (!dealer) {
      throw new NotFoundException(
        'Dealer not found',
      );
    }

    const order =
      await this.ordersRepository.findById(
        orderId,
      );

    if (!order) {
      throw new NotFoundException(
        'Order not found',
      );
    }


    return this.ordersRepository.update(
      orderId,
      {
        status: 'CONFIRMED',
      },
    );
  }

  // ❌ REJECT ORDER
  async rejectOrder(
    orderId: string,
    userId: string,
  ) {
    const dealer =
      await this.prisma.dealer.findUnique({
        where: {
          userId,
        },
      });

    if (!dealer) {
      throw new NotFoundException(
        'Dealer not found',
      );
    }

    const order =
      await this.ordersRepository.findById(
        orderId,
      );

    if (!order) {
      throw new NotFoundException(
        'Order not found',
      );
    }

    return this.ordersRepository.update(
      orderId,
      {
        status: 'CANCELLED',
      },
    );
  }

  // 💰 DEALER EARNINGS
  async getDealerEarnings(
    userId: string,
  ) {
    const dealer =
      await this.prisma.dealer.findUnique({
        where: {
          userId,
        },
      });

    if (!dealer) {
      throw new NotFoundException(
        'Dealer not found',
      );
    }

    return this.ordersRepository.getDealerOrders(
      dealer.id,
    );
  }

  async getDealerWallet(
  dealerId: string,
) {
  return this.prisma.dealer.findUnique({
    where: {
      id: dealerId,
    },

    select: {
      id: true,
      shopName: true,

      walletBalance: true,
      totalEarnings: true,

      buyOrders: {
        where: {
          status: 'COMPLETED',
        },

        orderBy: {
          updatedAt: 'desc',
        },

        take: 10,
      },
    },
  });
}

async getWalletTransactions(
  userId: string,
) {
  const dealer =
    await this.prisma.dealer.findUnique({
      where: {
        userId,
      },
    });

  if (!dealer) {
    throw new Error('Dealer not found');
  }

  return this.prisma.walletTransaction.findMany({
    where: {
      dealerId: dealer.id,
    },

    orderBy: {
      createdAt: 'desc',
    },

    take: 50,
  });
}

async getDealerDashboard(
  userId: string,
) {
  const dealer =
    await this.prisma.dealer.findUnique({
      where: {
        userId,
      },
    });

  if (!dealer) {
    throw new Error('Dealer not found');
  }

  const [
    totalOrders,
    pendingOrders,
    completedOrders,
    deliveredOrders,
    orders,
  ] = await Promise.all([
    this.prisma.buyOrder.count({
      where: {
        assignedDealerId: dealer.id,
      },
    }),

    this.prisma.buyOrder.count({
      where: {
        assignedDealerId: dealer.id,
        status: WorkflowStatus.ASSIGNED,
      },
    }),

    this.prisma.buyOrder.count({
      where: {
        assignedDealerId: dealer.id,
        status: 'COMPLETED',
      },
    }),

    this.prisma.buyOrder.count({
      where: {
        assignedDealerId: dealer.id,
        status: 'COMPLETED',
      },
    }),

    this.prisma.buyOrder.findMany({
      where: {
        assignedDealerId: dealer.id,
      },

      select: {
        finalPrice: true,
      },
    }),
  ]);

  const totalEarnings = orders.reduce(
    (sum, order) =>
      sum + (order.finalPrice || 0),
    0,
  );

  return {
    dealer: {
      id: dealer.id,

      shopName: dealer.shopName,

      totalEarnings,
    },

    stats: {
      totalOrders,
      pendingOrders,
      deliveredOrders,
      completedOrders,
    },
  };
}

  // 📦 FILTER ORDERS
  async findAll(
    filters: FilterOrderDto,
  ) {
    return this.ordersRepository.findAll(
      filters,
    );
  }

  async getDealerStats(
  userId: string,
) {
  const dealer =
    await this.prisma.dealer.findUnique({
      where: {
        userId,
      },
    });

  if (!dealer) {
    throw new Error('Dealer not found');
  }

 const [
  totalOrders,
  pendingOrders,
  deliveredOrders,
  orders,
] = await Promise.all([
  this.prisma.buyOrder.count({
    where: {
      assignedDealerId: dealer.id,
    },
  }),

  this.prisma.buyOrder.count({
    where: {
      assignedDealerId: dealer.id,
      status: 'ASSIGNED',
    },
  }),

  this.prisma.buyOrder.count({
    where: {
      assignedDealerId: dealer.id,
      status: 'COMPLETED',
    },
  }),

  this.prisma.buyOrder.findMany({
    where: {
      assignedDealerId: dealer.id,
    },
  }),
]);

const totalEarnings = orders.reduce(
  (sum, order) => sum + (order.finalPrice || 0),
  0
);

return {
  totalOrders,
  pendingOrders,
  deliveredOrders,

  totalEarnings,
};
}

}