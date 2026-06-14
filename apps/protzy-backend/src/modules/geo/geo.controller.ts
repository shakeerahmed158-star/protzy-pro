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

import { GeoService } from './geo.service';

import { CreateGeoDto } from './dto/create-geo.dto';
import { UpdateGeoDto } from './dto/update-geo.dto';
import { GeoQueryDto } from './dto/geo-query.dto';

@Controller('geo')
export class GeoController {
  constructor(
    private readonly geoService: GeoService,
  ) {}

  @Post()
  create(
    @Body() dto: CreateGeoDto,
  ) {
    return this.geoService.create(dto);
  }

  @Get()
  findAll(
    @Query() query: GeoQueryDto,
  ) {
    return this.geoService.findAll(query);
  }

  @Get(':id')
  findOne(
    @Param('id') id: string,
  ) {
    return this.geoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateGeoDto,
  ) {
    return this.geoService.update(id, dto);
  }

  @Delete(':id')
  remove(
    @Param('id') id: string,
  ) {
    return this.geoService.remove(id);
  }
}