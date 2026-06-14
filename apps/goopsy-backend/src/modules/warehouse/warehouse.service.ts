import { Injectable } from '@nestjs/common';

import { WarehouseRepository } from './warehouse.repository';

@Injectable()
export class WarehouseService {
  constructor(
    private readonly warehouseRepository: WarehouseRepository,
  ) {}

  async create(data: any) {
    return this.warehouseRepository.create(data);
  }

  async findAll() {
    return this.warehouseRepository.findAll();
  }

  async findByCode(code: string) {
    return this.warehouseRepository.findByCode(
      code,
    );
  }

  async findById(id: string) {
    return this.warehouseRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.warehouseRepository.update(id, data);
  }

  async delete(id: string) {
    return this.warehouseRepository.delete(id);
  }
}