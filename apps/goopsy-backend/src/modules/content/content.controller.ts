import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ContentService } from './content.service';

import { CreateContentDto } from './dto/create-content.dto';

import { UpdateContentDto } from './dto/update-content.dto';

@Controller('content')
export class ContentController {
  constructor(
    private readonly contentService: ContentService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateContentDto,
  ) {
    return this.contentService.create(body);
  }

  @Get()
  async findAll() {
    return this.contentService.findAll();
  }

  @Get('slug/:slug')
  async findBySlug(
    @Param('slug') slug: string,
  ) {
    return this.contentService.findBySlug(slug);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.contentService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateContentDto,
  ) {
    return this.contentService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.contentService.delete(id);
  }
}