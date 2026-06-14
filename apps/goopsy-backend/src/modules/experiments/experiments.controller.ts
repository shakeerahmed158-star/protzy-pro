import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { ExperimentsService } from './experiments.service';

import { CreateExperimentDto } from './dto/create-experiment.dto';

import { UpdateExperimentDto } from './dto/update-experiment.dto';

@Controller('experiments')
export class ExperimentsController {
  constructor(
    private readonly experimentsService: ExperimentsService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateExperimentDto,
  ) {
    return this.experimentsService.create(body);
  }

  @Get()
  async findAll() {
    return this.experimentsService.findAll();
  }

  @Get('key/:key')
  async findByKey(
    @Param('key') key: string,
  ) {
    return this.experimentsService.findByKey(key);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.experimentsService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateExperimentDto,
  ) {
    return this.experimentsService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.experimentsService.delete(id);
  }
}