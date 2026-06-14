import { Injectable } from '@nestjs/common';

import { InspectionRepository } from './inspection.repository';

import { CreateInspectionDto } from './dto/create-inspection.dto';
import { UpdateInspectionDto } from './dto/update-inspection.dto';
import { InspectionQueryDto } from './dto/inspection-query.dto';

@Injectable()
export class InspectionService {
  constructor(
    private readonly inspectionRepository: InspectionRepository,
  ) {}

  async create(dto: CreateInspectionDto) {
    return this.inspectionRepository.create(dto);
  }

  async findAll(query: InspectionQueryDto) {
    return this.inspectionRepository.findAll(query);
  }

  async findOne(id: string) {
    return this.inspectionRepository.findById(id);
  }

  async update(
    id: string,
    dto: UpdateInspectionDto,
  ) {
    return this.inspectionRepository.update(id, dto);
  }

  async remove(id: string) {
    return this.inspectionRepository.delete(id);
  }
}