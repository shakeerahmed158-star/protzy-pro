import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { PricingService } from '../services/pricing.service';

import { CreatePricingDto } from '../dto/create-pricing.dto';

import { UpdatePricingDto } from '../dto/update-pricing.dto';

@Controller('admin/pricing')
export class PricingAdminController {
  constructor(
    private readonly pricingService: PricingService,
  ) {}

  @Post()
  create(
    @Body() dto: CreatePricingDto,
  ) {
    return this.pricingService.create(dto);
  }

  @Get()
  findAll() {
    return this.pricingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pricingService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdatePricingDto,
  ) {
    return this.pricingService.update(
      id,
      dto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pricingService.remove(id);
  }
}