import { Injectable } from '@nestjs/common';

import { CartRepository } from './cart.repository';

@Injectable()
export class CartService {
  constructor(
    private readonly cartRepository: CartRepository,
  ) {}

  async create(data: any) {
    return this.cartRepository.create(data);
  }

  async findAll(userId: string) {
    return this.cartRepository.findAll(userId);
  }

  async findById(id: string) {
    return this.cartRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.cartRepository.update(id, data);
  }

  async delete(id: string) {
    return this.cartRepository.delete(id);
  }

  async clearCart(userId: string) {
    return this.cartRepository.clearCart(userId);
  }
}