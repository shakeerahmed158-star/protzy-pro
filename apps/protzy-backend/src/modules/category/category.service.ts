import { Injectable } from '@nestjs/common';

import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(
    private readonly categoryRepository: CategoryRepository,
  ) {}

  async create(data: any) {
    return this.categoryRepository.create(data);
  }

  async findAll() {
    return this.categoryRepository.findAll();
  }

  async findById(id: string) {
    return this.categoryRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.categoryRepository.update(id, data);
  }

  async delete(id: string) {
    return this.categoryRepository.delete(id);
  }
}