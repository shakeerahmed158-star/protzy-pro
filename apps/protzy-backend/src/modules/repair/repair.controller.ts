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

import { RepairService } from './repair.service';

import { CreateRepairDto } from './dto/create-repair.dto';
import { UpdateRepairDto } from './dto/update-repair.dto';
import { AssignTechnicianDto } from './dto/assign-technocian.dto';
import { RepairStatusDto } from './dto/repair-status.dto';
import { RepairFilterDto } from './dto/repair-filter.dto';

@Controller('repair')
export class RepairController {
  constructor(
    private readonly repairService: RepairService,
  ) {}

  @Post()
  async createRepair(
    @Body() dto: CreateRepairDto,
  ) {
    const customerId = 'temp-customer-id';

    return this.repairService.createRepair(
      customerId,
      dto,
    );
  }

  @Get()
  async getAllRepairs(
    @Query() filters: RepairFilterDto,
  ) {
    return this.repairService.getAllRepairs(
      filters,
    );
  }

  @Get(':id')
  async getRepairById(
    @Param('id') id: string,
  ) {
    return this.repairService.getRepairById(id);
  }

  @Patch(':id')
  async updateRepair(
    @Param('id') id: string,
    @Body() dto: UpdateRepairDto,
  ) {
    return this.repairService.updateRepair(
      id,
      dto,
    );
  }

  @Patch(':id/assign')
  async assignTechnician(
    @Param('id') id: string,
    @Body() dto: AssignTechnicianDto,
  ) {
    return this.repairService.assignTechnician(
      id,
      dto,
    );
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: string,
    @Body() dto: RepairStatusDto,
  ) {
    return this.repairService.updateStatus(
      id,
      dto,
    );
  }

  @Delete(':id')
  async deleteRepair(
    @Param('id') id: string,
  ) {
    return this.repairService.deleteRepair(id);
  }
}