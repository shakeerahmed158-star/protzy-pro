import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { PersonalizationService } from './personalization.service';

import { CreatePersonalizationDto } from './dto/create-personalization.dto';

import { UpdatePersonalizationDto } from './dto/update-personalization.dto';

@Controller('personalization')
export class PersonalizationController {
  constructor(
    private readonly personalizationService: PersonalizationService,
  ) {}

  @Post()
  async create(
    @Body() body: CreatePersonalizationDto,
  ) {
    return this.personalizationService.create(body);
  }

  @Get()
  async findAll() {
    return this.personalizationService.findAll();
  }

  @Get('user/:userId')
  async findByUser(
    @Param('userId') userId: string,
  ) {
    return this.personalizationService.findByUser(userId);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.personalizationService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdatePersonalizationDto,
  ) {
    return this.personalizationService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.personalizationService.delete(id);
  }
}