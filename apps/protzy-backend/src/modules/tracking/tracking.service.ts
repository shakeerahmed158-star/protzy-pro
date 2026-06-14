import { Injectable } from '@nestjs/common';

import { TrackingRepository } from './tracking.repository';

@Injectable()
export class TrackingService {
  constructor(
    private readonly trackingRepository: TrackingRepository,
  ) {}

  async create(data: any) {
    return this.trackingRepository.create(data);
  }

  async findAll() {
    return this.trackingRepository.findAll();
  }

  async findByTrackingNumber(
    trackingNumber: string,
  ) {
    return this.trackingRepository.findByTrackingNumber(
      trackingNumber,
    );
  }

  async findById(id: string) {
    return this.trackingRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.trackingRepository.update(id, data);
  }

  async delete(id: string) {
    return this.trackingRepository.delete(id);
  }
}