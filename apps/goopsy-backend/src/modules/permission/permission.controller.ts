import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { PermissionService } from './permission.service';

import { CreatePermissionDto } from './dto/create-permission.dto';

import { UpdatePermissionDto } from './dto/update-permission.dto';

@Controller('permissions')
export class PermissionController {
  constructor(
    private readonly permissionService: PermissionService,
  ) {}

  @Post()
  async create(
    @Body() body: CreatePermissionDto,
  ) {
    return this.permissionService.create(body);
  }

  @Get()
  async findAll() {
    return this.permissionService.findAll();
  }

  @Get('key/:key')
  async findByKey(
    @Param('key') key: string,
  ) {
    return this.permissionService.findByKey(key);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.permissionService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdatePermissionDto,
  ) {
    return this.permissionService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.permissionService.delete(id);
  }
}