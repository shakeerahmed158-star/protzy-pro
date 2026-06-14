import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { FeatureFlagService } from './feature-flag.service';

import { CreateFeatureFlagDto } from './dto/create-feature-flag.dto';

import { UpdateFeatureFlagDto } from './dto/update-feature-flag.dto';

@Controller('feature-flags')
export class FeatureFlagController {
  constructor(
    private readonly featureFlagService: FeatureFlagService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateFeatureFlagDto,
  ) {
    return this.featureFlagService.create(body);
  }

  @Get()
  async findAll() {
    return this.featureFlagService.findAll();
  }

  @Get('key/:key')
  async findByKey(
    @Param('key') key: string,
  ) {
    return this.featureFlagService.findByKey(key);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.featureFlagService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateFeatureFlagDto,
  ) {
    return this.featureFlagService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.featureFlagService.delete(id);
  }
}