import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CreateGeoDto } from './dto/create-geo.dto';
import { UpdateGeoDto } from './dto/update-geo.dto';
import { GeoQueryDto } from './dto/geo-query.dto';

@Injectable()
export class GeoRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: CreateGeoDto) {
    return {
      message: 'Geo location created successfully',
      data,
    };
  }

  async findAll(query?: GeoQueryDto) {
    return {
      message: 'Geo locations fetched successfully',
      query,
    };
  }

  async findById(id: string) {
    return {
      message: 'Geo location fetched successfully',
      id,
    };
  }

  async update(
    id: string,
    data: UpdateGeoDto,
  ) {
    return {
      message: 'Geo location updated successfully',
      id,
      data,
    };
  }

  async delete(id: string) {
    return {
      message: 'Geo location deleted successfully',
      id,
    };
  }
}