import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CreateFraudDto } from './dto/create-fraud.dto';
import { UpdateFraudDto } from './dto/update-fraud.dto';
import { FraudQueryDto } from './dto/fraud-query.dto';

@Injectable()
export class FraudRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: CreateFraudDto) {
    return {
      message: 'Fraud case created successfully',
      data,
    };
  }

  async findAll(query?: FraudQueryDto) {
    return {
      message: 'Fraud cases fetched successfully',
      query,
    };
  }

  async findById(id: string) {
    return {
      message: 'Fraud case fetched successfully',
      id,
    };
  }

  async update(
    id: string,
    data: UpdateFraudDto,
  ) {
    return {
      message: 'Fraud case updated successfully',
      id,
      data,
    };
  }

  async delete(id: string) {
    return {
      message: 'Fraud case deleted successfully',
      id,
    };
  }
}