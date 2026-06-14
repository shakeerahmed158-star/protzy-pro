import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { WarehouseService } from './warehouse.service';

import { CreateWarehouseDto } from './dto/create-warehouse.dto';

import { UpdateWarehouseDto } from './dto/update-warehouse.dto';

@Controller('warehouses')
export class WarehouseController {
  constructor(
    private readonly warehouseService: WarehouseService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateWarehouseDto,
  ) {
    return this.warehouseService.create(body);
  }

  @Get()
  async findAll() {
    return this.warehouseService.findAll();
  }

  @Get('code/:code')
  async findByCode(
    @Param('code') code: string,
  ) {
    return this.warehouseService.findByCode(code);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.warehouseService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateWarehouseDto,
  ) {
    return this.warehouseService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.warehouseService.delete(id);
  }
}