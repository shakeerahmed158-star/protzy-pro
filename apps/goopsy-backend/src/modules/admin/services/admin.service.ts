import { Injectable } from '@nestjs/common';

import { AdminRepository } from '../repositories/admin.repository';

@Injectable()
export class AdminService {
  constructor(
    private readonly adminRepository: AdminRepository,
  ) {}

  async getDashboard() {
    return this.adminRepository.getDashboard();
  }

  async getPendingDealers() {
    return this.adminRepository.getPendingDealers();
  }

  async approveDealer(id: string) {
    return this.adminRepository.approveDealer(id);
  }

  async rejectDealer(id: string) {
    return this.adminRepository.rejectDealer(id);
  }
}