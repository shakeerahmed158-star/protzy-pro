import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { SettingsService } from './settings.service';

import { CreateSettingsDto } from './dto/create-settings.dto';

import { UpdateSettingsDto } from './dto/update-settings.dto';

@Controller('settings')
export class SettingsController {
  constructor(
    private readonly settingsService: SettingsService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateSettingsDto,
  ) {
    return this.settingsService.create(body);
  }

  @Get()
  async findAll() {
    return this.settingsService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.settingsService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateSettingsDto,
  ) {
    return this.settingsService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.settingsService.delete(id);
  }
}