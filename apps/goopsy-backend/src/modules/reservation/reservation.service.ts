import { Injectable } from '@nestjs/common';

import { ReservationRepository } from './reservation.repository';

@Injectable()
export class ReservationService {
  constructor(
    private readonly reservationRepository: ReservationRepository,
  ) {}

  async create(data: any) {
    return this.reservationRepository.create(data);
  }

  async findAll() {
    return this.reservationRepository.findAll();
  }

  async findByUser(userId: string) {
    return this.reservationRepository.findByUser(userId);
  }

  async findById(id: string) {
    return this.reservationRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.reservationRepository.update(id, data);
  }

  async delete(id: string) {
    return this.reservationRepository.delete(id);
  }
}