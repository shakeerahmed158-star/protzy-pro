import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { SearchQueryDto } from './dto/search-query.dto';

@Injectable()
export class SearchRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async searchDevices(
    query: SearchQueryDto,
  ) {
    return this.prisma.product.findMany({
      where: {
        ...(query.brand && {
          brandId: query.brand,
        }),

        ...(query.model && {
          model: query.model,
        }),

        ...(query.keyword && {
          OR: [
            {
              name: {
                contains: query.keyword,
                mode: 'insensitive',
              },
            },

            {
              model: {
                contains: query.keyword,
                mode: 'insensitive',
              },
            },
          ],
        }),
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async searchDealers(
    query: SearchQueryDto,
  ) {
    return this.prisma.dealer.findMany({
      where: {
        ...(query.city && {
          city: query.city,
        }),

        ...(query.keyword && {
          shopName: {
            contains: query.keyword,
            mode: 'insensitive',
          },
        }),
      },

      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}