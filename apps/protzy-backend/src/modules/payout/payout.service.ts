import { Injectable } from '@nestjs/common';

import { PayoutRepository } from './payout.repository';

@Injectable()
export class PayoutService {
  constructor(
    private readonly payoutRepository: PayoutRepository,
  ) {}

  async create(data: any) {
    return this.payoutRepository.create(data);
  }

  async findAll() {
    return this.payoutRepository.findAll();
  }

  async findByDealer(dealerId: string) {
    return this.payoutRepository.findByDealer(
      dealerId,
    );
  }

  async findById(id: string) {
    return this.payoutRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.payoutRepository.update(id, data);
  }

  async delete(id: string) {
    return this.payoutRepository.delete(id);
  }
}