import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { AddressService } from './address.service';

import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';


@Controller('address')
export class AddressController {
  constructor(
    private readonly addressService: AddressService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateAddressDto,
  ) {
    return this.addressService.create(body);
  }

  @Get(':userId')
  async findAll(
    @Param('userId') userId: string,
  ) {
    return this.addressService.findAll(userId);
  }

  @Get('single/:id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.addressService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
      @Body() body: UpdateAddressDto,
  ) {
    return this.addressService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.addressService.delete(id);
  }
}