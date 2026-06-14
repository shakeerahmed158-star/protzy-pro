import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';

import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
  ) {}

  @Post()
  async create(
   @Body() body: CreateCategoryDto
  ) {
    return this.categoryService.create(body);
  }

  @Get()
  async findAll() {
    return this.categoryService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.categoryService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
   @Body() body: CreateCategoryDto
  ) {
    return this.categoryService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.categoryService.delete(id);
  }
}