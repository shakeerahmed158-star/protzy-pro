import { Injectable } from '@nestjs/common';

import { SeoRepository } from './seo.repository';

@Injectable()
export class SeoService {
  constructor(
    private readonly seoRepository: SeoRepository,
  ) {}

  async create(data: any) {
    return this.seoRepository.create(data);
  }

  async findAll() {
    return this.seoRepository.findAll();
  }

  async findByPage(page: string) {
    return this.seoRepository.findByPage(page);
  }

  async findById(id: string) {
    return this.seoRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.seoRepository.update(id, data);
  }

  async delete(id: string) {
    return this.seoRepository.delete(id);
  }
}