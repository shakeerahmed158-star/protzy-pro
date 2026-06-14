import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../../../shared/prisma/prisma.service';

import { CalculatePriceDto } from '../dto/calculate-price.dto';

@Injectable()
export class PricingEngineService {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async calculatePrice(dto: CalculatePriceDto) {

    const device =
      await this.prisma.priceDevice.findFirst({
        where: {
          brand: dto.brand,
          model: dto.model,
          storage: dto.storage,
        },

        include: {
          condition: true,
          age: true,
        },
      });

    if (!device) {
      throw new NotFoundException(
        'Pricing device not found',
      );
    }

    //////////////////////////////////////////////////
    // BASE PRICE
    //////////////////////////////////////////////////

    let finalPrice = device.basePrice;

    //////////////////////////////////////////////////
    // CONDITION DEDUCTIONS
    //////////////////////////////////////////////////

    if (dto.condition === 'screen') {
      finalPrice -=
        device.condition?.screenDeduction || 0;
    }

    if (dto.condition === 'body') {
      finalPrice -=
        device.condition?.bodyDeduction || 0;
    }

    if (dto.condition === 'function') {
      finalPrice -=
        device.condition?.functionDeduction || 0;
    }

    if (dto.condition === 'accessories') {
      finalPrice -=
        device.condition?.accessoriesDeduction || 0;
    }

    //////////////////////////////////////////////////
    // AGE MULTIPLIER
    //////////////////////////////////////////////////

    let multiplier = 1;

    if (dto.deviceAge === 'BELOW_3') {
      multiplier =
        device.age?.below3M || 1;
    }

    else if (dto.deviceAge === '3_TO_6') {
      multiplier =
        device.age?.m3to6 || 1;
    }

    else if (dto.deviceAge === '6_TO_11') {
      multiplier =
        device.age?.m6to11 || 1;
    }

    else if (dto.deviceAge === 'ABOVE_11') {
      multiplier =
        device.age?.above11 || 1;
    }

    //////////////////////////////////////////////////
    // FINAL PRICE
    //////////////////////////////////////////////////

    finalPrice =
      finalPrice * multiplier;

    //////////////////////////////////////////////////
    // RESPONSE
    //////////////////////////////////////////////////

    return {
      success: true,

      pricing: {
        brand: dto.brand,
        model: dto.model,
        storage: dto.storage,

        basePrice: device.basePrice,

        condition: dto.condition,

        deviceAge: dto.deviceAge,

        multiplier,

        evaluatedPrice: Math.round(finalPrice),
      },
    };
  }
}