import { Injectable } from '@nestjs/common';

import { SupportRepository } from './support.repository';

@Injectable()
export class SupportService {
  constructor(
    private readonly supportRepository: SupportRepository,
  ) {}

  async create(data: any) {
    return this.supportRepository.create(data);
  }

  async findAll() {
    return this.supportRepository.findAll();
  }

  async findByUser(userId: string) {
    return this.supportRepository.findByUser(userId);
  }

  async findById(id: string) {
    return this.supportRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.supportRepository.update(id, data);
  }

  async delete(id: string) {
    return this.supportRepository.delete(id);
  }
}