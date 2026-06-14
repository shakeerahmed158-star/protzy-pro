import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CreateAuditDto } from './dto/create-audit.dto';
import { UpdateAuditDto } from './dto/update-audit.dto';
import { AuditQueryDto } from './dto/audit-query.dto';

@Injectable()
export class AuditRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async create(data: CreateAuditDto) {
    return {
      message: 'Audit log created successfully',
      data,
    };
  }

  async findAll(query?: AuditQueryDto) {
    return {
      message: 'Audit logs fetched successfully',
      query,
    };
  }

  async findById(id: string) {
    return {
      message: 'Audit log fetched successfully',
      id,
    };
  }

  async update(
    id: string,
    data: UpdateAuditDto,
  ) {
    return {
      message: 'Audit log updated successfully',
      id,
      data,
    };
  }

  async delete(id: string) {
    return {
      message: 'Audit log deleted successfully',
      id,
    };
  }
}