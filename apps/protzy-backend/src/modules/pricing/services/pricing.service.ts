import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../../shared/prisma/prisma.service';

import { CreatePricingDto } from '../dto/create-pricing.dto';

import { UpdatePricingDto } from '../dto/update-pricing.dto';

@Injectable()
export class PricingService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(
    dto: CreatePricingDto,
  ) {
    return this.prisma.priceDevice.create({
      data: {
        brand: dto.brand,
        model: dto.model,
        storage: dto.storage,
        basePrice: dto.basePrice,

        condition: {
          create: {
            basicDeduction:
              dto.basicDeduction,

            screenDeduction:
              dto.screenDeduction,

            bodyDeduction:
              dto.bodyDeduction,

            functionDeduction:
              dto.functionDeduction,

            accessoriesDeduction:
              dto.accessoriesDeduction,
          },
        },

        age: {
          create: {
            below3M: dto.below3M,
            m3to6: dto.m3to6,
            m6to11: dto.m6to11,
            above11: dto.above11,
          },
        },
      },

      include: {
        condition: true,
        age: true,
      },
    });
  }

  async findAll() {
    return this.prisma.priceDevice.findMany({
      include: {
        condition: true,
        age: true,
      },
    });
  }

  async findOne(id: string) {
    const pricing =
      await this.prisma.priceDevice.findUnique({
        where: { id },

        include: {
          condition: true,
          age: true,
        },
      });

    if (!pricing) {
      throw new NotFoundException(
        'Pricing not found',
      );
    }

    return pricing;
  }

  async update(
    id: string,
    dto: UpdatePricingDto,
  ) {
    return this.prisma.priceDevice.update({
      where: { id },

      data: {
        brand: dto.brand,
        model: dto.model,
        storage: dto.storage,
        basePrice: dto.basePrice,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.priceDevice.delete({
      where: { id },
    });
  }
}