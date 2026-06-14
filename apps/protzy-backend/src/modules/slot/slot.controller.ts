import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { SlotService } from './slot.service';

import { CreateSlotDto } from './dto/create-slot.dto';

import { UpdateSlotDto } from './dto/update-slot.dto';

@Controller('slots')
export class SlotController {
  constructor(
    private readonly slotService: SlotService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateSlotDto,
  ) {
    return this.slotService.create(body);
  }

  @Get()
  async findAll() {
    return this.slotService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.slotService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateSlotDto,
  ) {
    return this.slotService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.slotService.delete(id);
  }
}