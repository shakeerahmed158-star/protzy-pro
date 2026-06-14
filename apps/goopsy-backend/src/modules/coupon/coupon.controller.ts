import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CouponService } from './coupon.service';

import { CreateCouponDto } from './dto/create-coupon.dto';

import { UpdateCouponDto } from './dto/update-coupon.dto';

@Controller('coupon')
export class CouponController {
  constructor(
    private readonly couponService: CouponService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateCouponDto,
  ) {
    return this.couponService.create(body);
  }

  @Get()
  async findAll() {
    return this.couponService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.couponService.findById(id);
  }

  @Get('code/:code')
  async findByCode(
    @Param('code') code: string,
  ) {
    return this.couponService.findByCode(code);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateCouponDto,
  ) {
    return this.couponService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.couponService.delete(id);
  }
}