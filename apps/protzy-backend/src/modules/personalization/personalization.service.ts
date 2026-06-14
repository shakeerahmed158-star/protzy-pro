import { Injectable } from '@nestjs/common';

import { PersonalizationRepository } from './personalization.repository';

@Injectable()
export class PersonalizationService {
  constructor(
    private readonly personalizationRepository: PersonalizationRepository,
  ) {}

  async create(data: any) {
    return this.personalizationRepository.create(data);
  }

  async findAll() {
    return this.personalizationRepository.findAll();
  }

  async findByUser(userId: string) {
    return this.personalizationRepository.findByUser(userId);
  }

  async findById(id: string) {
    return this.personalizationRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.personalizationRepository.update(id, data);
  }

  async delete(id: string) {
    return this.personalizationRepository.delete(id);
  }
}