import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ReturnsService } from './returns.service';

import { CreateReturnDto } from './dto/create-return.dto';

import { UpdateReturnDto } from './dto/update-return.dto';

@Controller('returns')
export class ReturnsController {
  constructor(
    private readonly returnsService: ReturnsService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateReturnDto,
  ) {
    return this.returnsService.create(body);
  }

  @Get()
  async findAll() {
    return this.returnsService.findAll();
  }

  @Get('user/:userId')
  async findByUser(
    @Param('userId') userId: string,
  ) {
    return this.returnsService.findByUser(userId);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.returnsService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateReturnDto,
  ) {
    return this.returnsService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.returnsService.delete(id);
  }
}