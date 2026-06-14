import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { SupportService } from './support.service';

import { CreateSupportDto } from './dto/create-support.dto';

import { UpdateSupportDto } from './dto/update-support.dto';

@Controller('support')
export class SupportController {
  constructor(
    private readonly supportService: SupportService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateSupportDto,
  ) {
    return this.supportService.create(body);
  }

  @Get()
  async findAll() {
    return this.supportService.findAll();
  }

  @Get('user/:userId')
  async findByUser(
    @Param('userId') userId: string,
  ) {
    return this.supportService.findByUser(userId);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.supportService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateSupportDto,
  ) {
    return this.supportService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.supportService.delete(id);
  }
}