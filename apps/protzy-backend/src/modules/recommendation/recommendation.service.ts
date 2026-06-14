import { Injectable } from '@nestjs/common';

import { RecommendationRepository } from './recommendation.repository';

@Injectable()
export class RecommendationService {
  constructor(
    private readonly recommendationRepository: RecommendationRepository,
  ) {}

  async create(data: any) {
    return this.recommendationRepository.create(data);
  }

  async findAll() {
    return this.recommendationRepository.findAll();
  }

  async findByUser(userId: string) {
    return this.recommendationRepository.findByUser(userId);
  }

  async findById(id: string) {
    return this.recommendationRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.recommendationRepository.update(id, data);
  }

  async delete(id: string) {
    return this.recommendationRepository.delete(id);
  }
}