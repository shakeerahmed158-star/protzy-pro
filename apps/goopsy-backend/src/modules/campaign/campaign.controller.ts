import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { CampaignService } from './campaign.service';

import { CreateCampaignDto } from './dto/create-campaign.dto';

import { UpdateCampaignDto } from './dto/update-campaign.dto';

@Controller('campaigns')
export class CampaignController {
  constructor(
    private readonly campaignService: CampaignService,
  ) {}

  @Post()
  async create(
    @Body() body: CreateCampaignDto,
  ) {
    return this.campaignService.create(body);
  }

  @Get()
  async findAll() {
    return this.campaignService.findAll();
  }

  @Get(':id')
  async findById(
    @Param('id') id: string,
  ) {
    return this.campaignService.findById(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() body: UpdateCampaignDto,
  ) {
    return this.campaignService.update(id, body);
  }

  @Delete(':id')
  async delete(
    @Param('id') id: string,
  ) {
    return this.campaignService.delete(id);
  }
}