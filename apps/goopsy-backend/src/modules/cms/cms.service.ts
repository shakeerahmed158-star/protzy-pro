import { Injectable } from '@nestjs/common';

import { CmsRepository } from './cms.repository';

@Injectable()
export class CmsService {
  constructor(
    private readonly cmsRepository: CmsRepository,
  ) {}

  async create(data: any) {
    return this.cmsRepository.create(data);
  }

  async findAll() {
    return this.cmsRepository.findAll();
  }

  async findById(id: string) {
    return this.cmsRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.cmsRepository.update(id, data);
  }

  async delete(id: string) {
    return this.cmsRepository.delete(id);
  }
}