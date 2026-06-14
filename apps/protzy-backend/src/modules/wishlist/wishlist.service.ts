import { Injectable } from '@nestjs/common';

import { WishlistRepository } from './wishlist.repository';

@Injectable()
export class WishlistService {
  constructor(
    private readonly wishlistRepository: WishlistRepository,
  ) {}

  async create(data: any) {
    return this.wishlistRepository.create(data);
  }

  async findAll(userId: string) {
    return this.wishlistRepository.findAll(userId);
  }

  async findById(id: string) {
    return this.wishlistRepository.findById(id);
  }

  async delete(id: string) {
    return this.wishlistRepository.delete(id);
  }

  async clearWishlist(userId: string) {
    return this.wishlistRepository.clearWishlist(userId);
  }
}