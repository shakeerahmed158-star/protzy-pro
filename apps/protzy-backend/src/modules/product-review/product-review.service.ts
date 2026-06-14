import { Injectable } from '@nestjs/common';

import { ProductReviewRepository } from './product-review.repository';

@Injectable()
export class ProductReviewService {
  constructor(
    private readonly productReviewRepository: ProductReviewRepository,
  ) {}

  async create(data: any) {
    return this.productReviewRepository.create(data);
  }

  async findAll() {
    return this.productReviewRepository.findAll();
  }

  async findByProduct(productId: string) {
    return this.productReviewRepository.findByProduct(productId);
  }

  async findById(id: string) {
    return this.productReviewRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.productReviewRepository.update(id, data);
  }

  async delete(id: string) {
    return this.productReviewRepository.delete(id);
  }
}