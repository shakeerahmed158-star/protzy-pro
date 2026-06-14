import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { SeoService } from './seo.service';

import { CreateSeoDto } from './dto/create-seo.dto';

import { UpdateSeoDto } from './dto/update-seo.dto';

@Controller('seo')
export class SeoController {
  constructor(
    private readonly seoService: SeoService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateSeoDto,
  ) {
    return this.seoService.create(body);
  }

  @Get()
  async findAll() {
    return this.seoService.findAll();
  }

  @Get('page/:page')
  async findByPage(
    @Param('page') page: string,
  ) {
    return this.seoService.findByPage(page);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.seoService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateSeoDto,
  ) {
    return this.seoService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.seoService.delete(id);
  }
}