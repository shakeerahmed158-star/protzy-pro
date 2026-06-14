import { Injectable } from '@nestjs/common';

import { LoyaltyRepository } from './loyalty.repository';

@Injectable()
export class LoyaltyService {
  constructor(
    private readonly loyaltyRepository: LoyaltyRepository,
  ) {}

  async create(data: any) {
    return this.loyaltyRepository.create(data);
  }

  async findAll() {
    return this.loyaltyRepository.findAll();
  }

  async findByUser(userId: string) {
    return this.loyaltyRepository.findByUser(userId);
  }

  async findById(id: string) {
    return this.loyaltyRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.loyaltyRepository.update(id, data);
  }

  async delete(id: string) {
    return this.loyaltyRepository.delete(id);
  }
}