import { Injectable } from '@nestjs/common';

import { DeliveryRepository } from './delivery.repository';

@Injectable()
export class DeliveryService {
  constructor(
    private readonly deliveryRepository: DeliveryRepository,
  ) {}

  async create(data: any) {
    return this.deliveryRepository.create(data);
  }

  async findAll() {
    return this.deliveryRepository.findAll();
  }

  async findById(id: string) {
    return this.deliveryRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.deliveryRepository.update(id, data);
  }

  async delete(id: string) {
    return this.deliveryRepository.delete(id);
  }
}