import { Injectable } from '@nestjs/common';

import { MembershipRepository } from './membership.repository';

@Injectable()
export class MembershipService {
  constructor(
    private readonly membershipRepository: MembershipRepository,
  ) {}

  async create(data: any) {
    return this.membershipRepository.create(data);
  }

  async findAll() {
    return this.membershipRepository.findAll();
  }

  async findByUser(userId: string) {
    return this.membershipRepository.findByUser(userId);
  }

  async findById(id: string) {
    return this.membershipRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.membershipRepository.update(id, data);
  }

  async delete(id: string) {
    return this.membershipRepository.delete(id);
  }
}