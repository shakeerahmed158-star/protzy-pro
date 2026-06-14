import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CreateInspectionDto } from './dto/create-inspection.dto';
import { UpdateInspectionDto } from './dto/update-inspection.dto';
import { InspectionQueryDto } from './dto/inspection-query.dto';

@Injectable()
export class InspectionRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: CreateInspectionDto) {
    return {
      message: 'Inspection created successfully',
      data,
    };
  }

  async findAll(query?: InspectionQueryDto) {
    return {
      message: 'Inspection list fetched successfully',
      query,
    };
  }

  async findById(id: string) {
    return {
      message: 'Inspection fetched successfully',
      id,
    };
  }

  async update(
    id: string,
    data: UpdateInspectionDto,
  ) {
    return {
      message: 'Inspection updated successfully',
      id,
      data,
    };
  }

  async delete(id: string) {
    return {
      message: 'Inspection deleted successfully',
      id,
    };
  }
}