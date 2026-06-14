import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { DeliveryService } from './delivery.service';

import { CreateDeliveryDto } from './dto/create-delivery.dto';

import { UpdateDeliveryDto } from './dto/update-delivery.dto';

@Controller('delivery')
export class DeliveryController {
  constructor(
    private readonly deliveryService: DeliveryService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateDeliveryDto,
  ) {
    return this.deliveryService.create(body);
  }

  @Get()
  async findAll() {
    return this.deliveryService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.deliveryService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateDeliveryDto,
  ) {
    return this.deliveryService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.deliveryService.delete(id);
  }
}