import { Injectable } from '@nestjs/common';

import { TaxRepository } from './tax.repository';

@Injectable()
export class TaxService {
  constructor(
    private readonly taxRepository: TaxRepository,
  ) {}

  async create(data: any) {
    return this.taxRepository.create(data);
  }

  async findAll() {
    return this.taxRepository.findAll();
  }

  async findById(id: string) {
    return this.taxRepository.findById(id);
  }

  async findByCode(code: string) {
    return this.taxRepository.findByCode(code);
  }

  async update(id: string, data: any) {
    return this.taxRepository.update(id, data);
  }

  async delete(id: string) {
    return this.taxRepository.delete(id);
  }
}