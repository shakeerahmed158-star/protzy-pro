import { Injectable } from '@nestjs/common';

import { OffersRepository } from './offers.repository';

@Injectable()
export class OffersService {
  constructor(
    private readonly offersRepository: OffersRepository,
  ) {}

  async create(data: any) {
    return this.offersRepository.create(data);
  }

  async findAll() {
    return this.offersRepository.findAll();
  }

  async findById(id: string) {
    return this.offersRepository.findById(id);
  }

  async findBySlug(slug: string) {
    return this.offersRepository.findBySlug(slug);
  }

  async update(id: string, data: any) {
    return this.offersRepository.update(id, data);
  }

  async delete(id: string) {
    return this.offersRepository.delete(id);
  }
}