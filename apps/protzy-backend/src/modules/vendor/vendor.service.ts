import { Injectable } from '@nestjs/common';

import { VendorRepository } from './vendor.repository';

@Injectable()
export class VendorService {
  constructor(
    private readonly vendorRepository: VendorRepository,
  ) {}

  async create(data: any) {
    return this.vendorRepository.create(data);
  }

  async findAll() {
    return this.vendorRepository.findAll();
  }

  async findById(id: string) {
    return this.vendorRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.vendorRepository.update(id, data);
  }

  async delete(id: string) {
    return this.vendorRepository.delete(id);
  }
}