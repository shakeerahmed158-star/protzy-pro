import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { CommissionRepository } from '../repositories/commission.repository';

import { CreateCommissionDto } from '../dto/create-commission.dto';
import { UpdateCommissionDto } from '../dto/update-commission.dto';
import { CommissionQueryDto } from '../dto/commission-query.dto';

@Injectable()
export class CommissionService {
  constructor(
    private readonly repository: CommissionRepository,
  ) {}

  async create(data: CreateCommissionDto) {
    return this.repository.create(data);
  }

  async findAll(query: CommissionQueryDto) {
    return this.repository.findAll(query);
  }

  async findById(id: string) {
    const commission =
      await this.repository.findById(id);

    if (!commission) {
      throw new NotFoundException(
        'Commission not found',
      );
    }

    return commission;
  }

  async update(
    id: string,
    data: UpdateCommissionDto,
  ) {
    await this.findById(id);

    return this.repository.update(id, data);
  }

  async delete(id: string) {
    await this.findById(id);

    return this.repository.delete(id);
  }

  async dealerCommissions(
    dealerId: string,
  ) {
    return this.repository.dealerCommissions(
      dealerId,
    );
  }

  async totalDealerCommission(
    dealerId: string,
  ) {
    return this.repository.totalDealerCommission(
      dealerId,
    );
  }
}