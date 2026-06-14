import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ProductReviewService } from './product-review.service';

import { CreateProductReviewDto } from './dto/create-product-review.dto';

import { UpdateProductReviewDto } from './dto/update-product-review.dto';

@Controller('product-reviews')
export class ProductReviewController {
  constructor(
    private readonly productReviewService: ProductReviewService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateProductReviewDto,
  ) {
    return this.productReviewService.create(body);
  }

  @Get()
  async findAll() {
    return this.productReviewService.findAll();
  }

  @Get('product/:productId')
  async findByProduct(
    @Param('productId') productId: string,
  ) {
    return this.productReviewService.findByProduct(productId);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.productReviewService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateProductReviewDto,
  ) {
    return this.productReviewService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.productReviewService.delete(id);
  }
}