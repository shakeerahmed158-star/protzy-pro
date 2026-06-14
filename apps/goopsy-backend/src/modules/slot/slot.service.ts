import { Injectable } from '@nestjs/common';

import { SlotRepository } from './slot.repository';

@Injectable()
export class SlotService {
  constructor(
    private readonly slotRepository: SlotRepository,
  ) {}

  async create(data: any) {
    return this.slotRepository.create(data);
  }

  async findAll() {
    return this.slotRepository.findAll();
  }

  async findById(id: string) {
    return this.slotRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.slotRepository.update(id, data);
  }

  async delete(id: string) {
    return this.slotRepository.delete(id);
  }
}