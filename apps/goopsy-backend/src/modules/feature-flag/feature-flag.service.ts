import { Injectable } from '@nestjs/common';

import { FeatureFlagRepository } from './feature-flag.repository';

@Injectable()
export class FeatureFlagService {
  constructor(
    private readonly featureFlagRepository: FeatureFlagRepository,
  ) {}

  async create(data: any) {
    return this.featureFlagRepository.create(data);
  }

  async findAll() {
    return this.featureFlagRepository.findAll();
  }

  async findByKey(key: string) {
    return this.featureFlagRepository.findByKey(
      key,
    );
  }

  async findById(id: string) {
    return this.featureFlagRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.featureFlagRepository.update(id, data);
  }

  async delete(id: string) {
    return this.featureFlagRepository.delete(id);
  }
}