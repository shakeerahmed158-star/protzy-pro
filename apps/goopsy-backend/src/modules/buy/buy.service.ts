import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { BuyRepository } from './buy.repository';

import { CreateBuyDto } from './dto/create-buy.dto';
import { UpdateBuyDto } from './dto/update-buy.dto';
import { FilterBuyDto } from './dto/filter-buy.dto';

@Injectable()
export class BuyService {
  constructor(
    private readonly prisma: PrismaService,

    private readonly buyRepository: BuyRepository,
  ) {}

  /////////////////////////////////////////////////////////
  // 🛒 CREATE CUSTOMER ORDER
  /////////////////////////////////////////////////////////

  async createOrder(body: any) {
    return this.prisma.order.create({
      data: {
        type: 'BUY',

        /////////////////////////////////////////////////////////
        // USER
        /////////////////////////////////////////////////////////

        ...(body.userId && {
          user: {
            connect: {
              id: body.userId,
            },
          },
        }),

        /////////////////////////////////////////////////////////
        // PRODUCT
        /////////////////////////////////////////////////////////

        ...(body.productId && {
          product: {
            connect: {
              id: body.productId,
            },
          },
        }),

        /////////////////////////////////////////////////////////
        // PAYMENT
        /////////////////////////////////////////////////////////

        paymentMethod:
          body.paymentMethod || 'COD',

        paymentStatus: 'PENDING',

        /////////////////////////////////////////////////////////
        // PRICING
        /////////////////////////////////////////////////////////

        totalAmount:
          Number(body.totalAmount) || 0,

        /////////////////////////////////////////////////////////
        // STATUS
        /////////////////////////////////////////////////////////

        status: 'PENDING',
      },
    });
  }

  /////////////////////////////////////////////////////////
  // 📦 CREATE INVENTORY
  /////////////////////////////////////////////////////////

  async createDevice(
    userId: string,
    dto: CreateBuyDto,
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

    return this.prisma.inventory.create({
      data: {
        /////////////////////////////////////////////////////////
        // DEALER
        /////////////////////////////////////////////////////////

        dealer: {
          connect: {
            id: dealer.id,
          },
        },

        /////////////////////////////////////////////////////////
        // PRODUCT
        /////////////////////////////////////////////////////////

        product: {
          connect: {
            id: dto.productId,
          },
        },

        /////////////////////////////////////////////////////////
        // INVENTORY
        /////////////////////////////////////////////////////////

        stock: dto.stock || 1,

        price: dto.price,

        offerPrice: dto.offerPrice,

        finalPrice: dto.finalPrice,

        commissionPercent:
          dto.commissionPercent || 5,

        /////////////////////////////////////////////////////////
        // VARIANTS
        /////////////////////////////////////////////////////////

        ram: dto.ram,

        storage: dto.storage,

        color: dto.color,

        /////////////////////////////////////////////////////////
        // DETAILS
        /////////////////////////////////////////////////////////

        description: dto.description,

        images: dto.images || [],

        /////////////////////////////////////////////////////////
        // STATUS
        /////////////////////////////////////////////////////////

        status: 'ACTIVE',
      },
    });
  }

  /////////////////////////////////////////////////////////
  // 🛒 MARKETPLACE
  /////////////////////////////////////////////////////////

  async getAllDevices(
    filters?: FilterBuyDto,
  ) {
    return this.buyRepository.findAll(
      filters,
    );
  }

  /////////////////////////////////////////////////////////
  // 📦 DEALER INVENTORY
  /////////////////////////////////////////////////////////

  async getDealerDevices(
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

    return this.buyRepository.findAll({
      dealerId: dealer.id,
    });
  }

  /////////////////////////////////////////////////////////
  // 📱 SINGLE INVENTORY
  /////////////////////////////////////////////////////////

  async findOne(id: string) {
    const inventory =
      await this.buyRepository.findById(id);

    if (!inventory) {
      throw new NotFoundException(
        'Inventory not found',
      );
    }

    return inventory;
  }

  /////////////////////////////////////////////////////////
  // ✏️ UPDATE INVENTORY
  /////////////////////////////////////////////////////////

  async update(
    id: string,
    dto: UpdateBuyDto,
  ) {
    return this.buyRepository.update(
      id,
      dto,
    );
  }

  /////////////////////////////////////////////////////////
  // 🗑️ DELETE INVENTORY
  /////////////////////////////////////////////////////////

  async remove(id: string) {
    return this.buyRepository.delete(id);
  }
}