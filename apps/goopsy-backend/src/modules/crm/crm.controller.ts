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

import { CrmService } from './crm.service';

import { CreateCrmDto } from './dto/create-crm.dto';
import { UpdateCrmDto } from './dto/update-crm.dto';
import { CrmQueryDto } from './dto/crm-query.dto';

@Controller('crm')
export class CrmController {
  constructor(
    private readonly crmService: CrmService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateCrmDto,
  ) {
    return this.crmService.create(dto);
  }

  @Get()
  findAll(
    @Query() query: CrmQueryDto,
  ) {
    return this.crmService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.crmService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateCrmDto,
  ) {
    return this.crmService.update(id, dto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
  ) {
    return this.crmService.remove(id);
  }
}