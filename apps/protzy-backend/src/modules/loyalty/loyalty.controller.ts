import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { LoyaltyService } from './loyalty.service';

import { CreateLoyaltyDto } from './dto/create-loyalty.dto';

import { UpdateLoyaltyDto } from './dto/update-loyalty.dto';

@Controller('loyalty')
export class LoyaltyController {
  constructor(
    private readonly loyaltyService: LoyaltyService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateLoyaltyDto,
  ) {
    return this.loyaltyService.create(body);
  }

  @Get()
  async findAll() {
    return this.loyaltyService.findAll();
  }

  @Get('user/:userId')
  async findByUser(
    @Param('userId') userId: string,
  ) {
    return this.loyaltyService.findByUser(userId);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.loyaltyService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateLoyaltyDto,
  ) {
    return this.loyaltyService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.loyaltyService.delete(id);
  }
}