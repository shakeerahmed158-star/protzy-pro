import { Injectable } from '@nestjs/common';

import { ReferralRepository } from './referral.repository';

@Injectable()
export class ReferralService {
  constructor(
    private readonly referralRepository: ReferralRepository,
  ) {}

  async create(data: any) {
    return this.referralRepository.create(data);
  }

  async findAll() {
    return this.referralRepository.findAll();
  }

  async findById(id: string) {
    return this.referralRepository.findById(id);
  }

  async findByCode(referralCode: string) {
    return this.referralRepository.findByCode(referralCode);
  }

  async update(id: string, data: any) {
    return this.referralRepository.update(id, data);
  }

  async delete(id: string) {
    return this.referralRepository.delete(id);
  }
}