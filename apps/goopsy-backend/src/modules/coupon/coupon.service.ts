import { Injectable } from '@nestjs/common';

import { CouponRepository } from './coupon.repository';

@Injectable()
export class CouponService {
  constructor(
    private readonly couponRepository: CouponRepository,
  ) {}

  async create(data: any) {
    return this.couponRepository.create(data);
  }

  async findAll() {
    return this.couponRepository.findAll();
  }

  async findById(id: string) {
    return this.couponRepository.findById(id);
  }

  async findByCode(code: string) {
    return this.couponRepository.findByCode(code);
  }

  async update(id: string, data: any) {
    return this.couponRepository.update(id, data);
  }

  async delete(id: string) {
    return this.couponRepository.delete(id);
  }
}