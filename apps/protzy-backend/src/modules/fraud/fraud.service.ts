import { Injectable } from '@nestjs/common';

import { FraudRepository } from './fraud.repository';

import { CreateFraudDto } from './dto/create-fraud.dto';
import { UpdateFraudDto } from './dto/update-fraud.dto';
import { FraudQueryDto } from './dto/fraud-query.dto';

@Injectable()
export class FraudService {
  constructor(
    private readonly fraudRepository: FraudRepository,
  ) {}

  async create(dto: CreateFraudDto) {
    return this.fraudRepository.create(dto);
  }

  async findAll(query: FraudQueryDto) {
    return this.fraudRepository.findAll(query);
  }

  async findOne(id: string) {
    return this.fraudRepository.findById(id);
  }

  async update(
    id: string,
    dto: UpdateFraudDto,
  ) {
    return this.fraudRepository.update(id, dto);
  }

  async remove(id: string) {
    return this.fraudRepository.delete(id);
  }
}