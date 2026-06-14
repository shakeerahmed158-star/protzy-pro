import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { TaxService } from './tax.service';

import { CreateTaxDto } from './dto/create-tax.dto';

import { UpdateTaxDto } from './dto/update-tax.dto';

@Controller('tax')
export class TaxController {
  constructor(
    private readonly taxService: TaxService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateTaxDto,
  ) {
    return this.taxService.create(body);
  }

  @Get()
  async findAll() {
    return this.taxService.findAll();
  }

  @Get('code/:code')
  async findByCode(
    @Param('code') code: string,
  ) {
    return this.taxService.findByCode(code);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.taxService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateTaxDto,
  ) {
    return this.taxService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.taxService.delete(id);
  }
}