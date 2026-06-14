import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CommunicationService } from './communication.service';

import { CreateCommunicationDto } from './dto/create-communication.dto';

import { UpdateCommunicationDto } from './dto/update-communication.dto';

@Controller('communication')
export class CommunicationController {
  constructor(
    private readonly communicationService: CommunicationService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateCommunicationDto,
  ) {
    return this.communicationService.create(body);
  }

  @Get()
  async findAll() {
    return this.communicationService.findAll();
  }

  @Get('user/:userId')
  async findByUser(
    @Param('userId') userId: string,
  ) {
    return this.communicationService.findByUser(userId);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.communicationService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateCommunicationDto,
  ) {
    return this.communicationService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.communicationService.delete(id);
  }
}