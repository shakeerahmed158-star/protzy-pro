import { Injectable } from '@nestjs/common';

import { GeoRepository } from './geo.repository';

import { CreateGeoDto } from './dto/create-geo.dto';
import { UpdateGeoDto } from './dto/update-geo.dto';
import { GeoQueryDto } from './dto/geo-query.dto';

@Injectable()
export class GeoService {
  constructor(
    private readonly geoRepository: GeoRepository,
  ) {}

  async create(dto: CreateGeoDto) {
    return this.geoRepository.create(dto);
  }

  async findAll(query: GeoQueryDto) {
    return this.geoRepository.findAll(query);
  }

  async findOne(id: string) {
    return this.geoRepository.findById(id);
  }

  async update(
    id: string,
    dto: UpdateGeoDto,
  ) {
    return this.geoRepository.update(id, dto);
  }

  async remove(id: string) {
    return this.geoRepository.delete(id);
  }
}