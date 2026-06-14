import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { VendorService } from './vendor.service';

import { CreateVendorDto } from './dto/create-vendor.dto';

import { UpdateVendorDto } from './dto/update-vendor.dto';

@Controller('vendors')
export class VendorController {
  constructor(
    private readonly vendorService: VendorService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateVendorDto,
  ) {
    return this.vendorService.create(body);
  }

  @Get()
  async findAll() {
    return this.vendorService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.vendorService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateVendorDto,
  ) {
    return this.vendorService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.vendorService.delete(id);
  }
}