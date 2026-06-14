import { Injectable } from '@nestjs/common';

import { ActivityRepository } from './activity.repository';

@Injectable()
export class ActivityService {
  constructor(
    private readonly activityRepository: ActivityRepository,
  ) {}

  async create(data: any) {
    return this.activityRepository.create(data);
  }

  async findAll() {
    return this.activityRepository.findAll();
  }

  async findByUser(userId: string) {
    return this.activityRepository.findByUser(
      userId,
    );
  }

  async findById(id: string) {
    return this.activityRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.activityRepository.update(id, data);
  }

  async delete(id: string) {
    return this.activityRepository.delete(id);
  }
}