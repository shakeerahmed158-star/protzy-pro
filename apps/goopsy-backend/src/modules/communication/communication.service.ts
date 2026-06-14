import { Injectable } from '@nestjs/common';

import { CommunicationRepository } from './communication.repository';

@Injectable()
export class CommunicationService {
  constructor(
    private readonly communicationRepository: CommunicationRepository,
  ) {}

  async create(data: any) {
    return this.communicationRepository.create(data);
  }

  async findAll() {
    return this.communicationRepository.findAll();
  }

  async findByUser(userId: string) {
    return this.communicationRepository.findByUser(userId);
  }

  async findById(id: string) {
    return this.communicationRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.communicationRepository.update(id, data);
  }

  async delete(id: string) {
    return this.communicationRepository.delete(id);
  }
}