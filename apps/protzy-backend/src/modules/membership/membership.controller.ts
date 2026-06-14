import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { MembershipService } from './membership.service';

import { CreateMembershipDto } from './dto/create-membership.dto';

import { UpdateMembershipDto } from './dto/update-membership.dto';

@Controller('membership')
export class MembershipController {
  constructor(
    private readonly membershipService: MembershipService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateMembershipDto,
  ) {
    return this.membershipService.create(body);
  }

  @Get()
  async findAll() {
    return this.membershipService.findAll();
  }

  @Get('user/:userId')
  async findByUser(
    @Param('userId') userId: string,
  ) {
    return this.membershipService.findByUser(userId);
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.membershipService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateMembershipDto,
  ) {
    return this.membershipService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.membershipService.delete(id);
  }
}