import { Injectable } from '@nestjs/common';

import { AddressRepository } from './address.repository';

@Injectable()
export class AddressService {
  constructor(
    private readonly addressRepository: AddressRepository,
  ) {}

  async create(data: any) {
    return this.addressRepository.create(data);
  }

  async findAll(userId: string) {
    return this.addressRepository.findAll(userId);
  }

  async findById(id: string) {
    return this.addressRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.addressRepository.update(id, data);
  }

  async delete(id: string) {
    return this.addressRepository.delete(id);
  }
}