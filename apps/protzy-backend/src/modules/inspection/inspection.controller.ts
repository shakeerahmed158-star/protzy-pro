import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { InspectionService } from './inspection.service';

import { CreateInspectionDto } from './dto/create-inspection.dto';
import { UpdateInspectionDto } from './dto/update-inspection.dto';
import { InspectionQueryDto } from './dto/inspection-query.dto';

@Controller('inspection')
export class InspectionController {
  constructor(
    private readonly inspectionService: InspectionService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateInspectionDto,
  ) {
    return this.inspectionService.create(dto);
  }

  @Get()
  findAll(
    @Query() query: InspectionQueryDto,
  ) {
    return this.inspectionService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.inspectionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateInspectionDto,
  ) {
    return this.inspectionService.update(id, dto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
  ) {
    return this.inspectionService.remove(id);
  }
}