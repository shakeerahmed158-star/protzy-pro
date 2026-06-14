import { Injectable } from '@nestjs/common';

import { ProductRepository } from './product.repository';

import { CreateProductDto } from './dto/create-product.dto';

import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  create(dto: CreateProductDto) {
    return this.repository.create(dto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findById(id);
  }

  update(id: string, dto: UpdateProductDto) {
    return this.repository.update(id, dto);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}