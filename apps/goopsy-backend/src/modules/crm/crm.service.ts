import { Injectable } from '@nestjs/common';

import { CrmRepository } from './crm.repository';

import { CreateCrmDto } from './dto/create-crm.dto';
import { UpdateCrmDto } from './dto/update-crm.dto';
import { CrmQueryDto } from './dto/crm-query.dto';

@Injectable()
export class CrmService {
  constructor(
    private readonly crmRepository: CrmRepository,
  ) {}

  async create(dto: CreateCrmDto) {
    return this.crmRepository.create(dto);
  }

  async findAll(query: CrmQueryDto) {
    return this.crmRepository.findAll(query);
  }

  async findOne(id: string) {
    return this.crmRepository.findById(id);
  }

  async update(
    id: string,
    dto: UpdateCrmDto,
  ) {
    return this.crmRepository.update(id, dto);
  }

  async remove(id: string) {
    return this.crmRepository.delete(id);
  }
}