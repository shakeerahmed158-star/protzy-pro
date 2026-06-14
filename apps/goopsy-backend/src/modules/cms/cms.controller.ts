import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CmsService } from './cms.service';

import { CreateCmsDto } from './dto/create-cms.dto';

import { UpdateCmsDto } from './dto/update-cms.dto';

@Controller('cms')
export class CmsController {
  constructor(
    private readonly cmsService: CmsService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateCmsDto,
  ) {
    return this.cmsService.create(body);
  }

  @Get()
  async findAll() {
    return this.cmsService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.cmsService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateCmsDto,
  ) {
    return this.cmsService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.cmsService.delete(id);
  }
}