import { Injectable } from '@nestjs/common';

import { ExperimentsRepository } from './experiments.repository';

@Injectable()
export class ExperimentsService {
  constructor(
    private readonly experimentsRepository: ExperimentsRepository,
  ) {}

  async create(data: any) {
    return this.experimentsRepository.create(data);
  }

  async findAll() {
    return this.experimentsRepository.findAll();
  }

  async findById(id: string) {
    return this.experimentsRepository.findById(id);
  }

  async findByKey(key: string) {
    return this.experimentsRepository.findByKey(key);
  }

  async update(id: string, data: any) {
    return this.experimentsRepository.update(id, data);
  }

  async delete(id: string) {
    return this.experimentsRepository.delete(id);
  }
}