import { Injectable } from '@nestjs/common';

import { PermissionRepository } from './permission.repository';

@Injectable()
export class PermissionService {
  constructor(
    private readonly permissionRepository: PermissionRepository,
  ) {}

  async create(data: any) {
    return this.permissionRepository.create(data);
  }

  async findAll() {
    return this.permissionRepository.findAll();
  }

  async findByKey(key: string) {
    return this.permissionRepository.findByKey(
      key,
    );
  }

  async findById(id: string) {
    return this.permissionRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.permissionRepository.update(id, data);
  }

  async delete(id: string) {
    return this.permissionRepository.delete(id);
  }
}