import { Injectable } from '@nestjs/common';

import { AuditRepository } from './audit.repository';

import { CreateAuditDto } from './dto/create-audit.dto';
import { UpdateAuditDto } from './dto/update-audit.dto';
import { AuditQueryDto } from './dto/audit-query.dto';

@Injectable()
export class AuditService {
  constructor(
    private readonly auditRepository: AuditRepository,
  ) {}

  async create(dto: CreateAuditDto) {
    return this.auditRepository.create(dto);
  }

  async findAll(query: AuditQueryDto) {
    return this.auditRepository.findAll(query);
  }

  async findOne(id: string) {
    return this.auditRepository.findById(id);
  }

  async update(
    id: string,
    dto: UpdateAuditDto,
  ) {
    return this.auditRepository.update(id, dto);
  }

  async remove(id: string) {
    return this.auditRepository.delete(id);
  }
}