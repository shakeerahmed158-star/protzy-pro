import { Injectable } from '@nestjs/common';

import { ReturnsRepository } from './returns.repository';

@Injectable()
export class ReturnsService {
  constructor(
    private readonly returnsRepository: ReturnsRepository,
  ) {}

  async create(data: any) {
    return this.returnsRepository.create(data);
  }

  async findAll() {
    return this.returnsRepository.findAll();
  }

  async findByUser(userId: string) {
    return this.returnsRepository.findByUser(userId);
  }

  async findById(id: string) {
    return this.returnsRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.returnsRepository.update(id, data);
  }

  async delete(id: string) {
    return this.returnsRepository.delete(id);
  }
}