import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { OffersService } from './offers.service';

import { CreateOfferDto } from './dto/create-offer.dto';

import { UpdateOfferDto } from './dto/update-offer.dto';

@Controller('offers')
export class OffersController {
  constructor(
    private readonly offersService: OffersService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateOfferDto,
  ) {
    return this.offersService.create(body);
  }

  @Get()
  async findAll() {
    return this.offersService.findAll();
  }

  @Get('slug/:slug')
  async findBySlug(
    @Param('slug') slug: string,
  ) {
    return this.offersService.findBySlug(slug);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.offersService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateOfferDto,
  ) {
    return this.offersService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.offersService.delete(id);
  }
}