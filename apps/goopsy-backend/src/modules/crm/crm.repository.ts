import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CreateCrmDto } from './dto/create-crm.dto';
import { UpdateCrmDto } from './dto/update-crm.dto';
import { CrmQueryDto } from './dto/crm-query.dto';

@Injectable()
export class CrmRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: CreateCrmDto) {
    return {
      message: 'CRM ticket created successfully',
      data,
    };
  }

  async findAll(query?: CrmQueryDto) {
    return {
      message: 'CRM tickets fetched successfully',
      query,
    };
  }

  async findById(id: string) {
    return {
      message: 'CRM ticket fetched successfully',
      id,
    };
  }

  async update(
    id: string,
    data: UpdateCrmDto,
  ) {
    return {
      message: 'CRM ticket updated successfully',
      id,
      data,
    };
  }

  async delete(id: string) {
    return {
      message: 'CRM ticket deleted successfully',
      id,
    };
  }
}