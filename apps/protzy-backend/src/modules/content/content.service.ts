import { Injectable } from '@nestjs/common';

import { ContentRepository } from './content.repository';

@Injectable()
export class ContentService {
  constructor(
    private readonly contentRepository: ContentRepository,
  ) {}

  async create(data: any) {
    return this.contentRepository.create(data);
  }

  async findAll() {
    return this.contentRepository.findAll();
  }

  async findById(id: string) {
    return this.contentRepository.findById(id);
  }

  async findBySlug(slug: string) {
    return this.contentRepository.findBySlug(slug);
  }

  async update(id: string, data: any) {
    return this.contentRepository.update(id, data);
  }

  async delete(id: string) {
    return this.contentRepository.delete(id);
  }
}