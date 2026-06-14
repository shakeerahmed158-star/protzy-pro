import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { RepairRepository } from './repair.repository';

import { CreateRepairDto } from './dto/create-repair.dto';
import { UpdateRepairDto } from './dto/update-repair.dto';
import { AssignTechnicianDto } from './dto/assign-technocian.dto';
import { RepairStatusDto } from './dto/repair-status.dto';
import { RepairFilterDto } from './dto/repair-filter.dto';

import { WorkflowStatus } from '@prisma/client';

@Injectable()
export class RepairService {
  constructor(
    private readonly repairRepository: RepairRepository,
  ) {}

  async createRepair(
    customerId: string,
    dto: CreateRepairDto,
  ) {
    return this.repairRepository.create({
      brand: dto.brand,
      model: dto.model,
      issue: dto.issue,
      estimatedCost: dto.estimatedCost,

      customer: {
        connect: {
          id: customerId,
        },
      },

      status: WorkflowStatus.PENDING,
    });
  }

  async getAllRepairs(
    filters: RepairFilterDto,
  ) {
    return this.repairRepository.findAll({
      status: filters.status,
      dealerId: filters.dealerId,
      customerId: filters.customerId,
    });
  }

  async getRepairById(id: string) {
    const repair =
      await this.repairRepository.findById(id);

    if (!repair) {
      throw new NotFoundException(
        'Repair lead not found',
      );
    }

    return repair;
  }

  async updateRepair(
    id: string,
    dto: UpdateRepairDto,
  ) {
    await this.getRepairById(id);

    return this.repairRepository.update(id, {
      brand: dto.brand,
      model: dto.model,
      issue: dto.issue,

      estimatedCost: dto.estimatedPrice ,
    });
  }

async assignTechnician(
  id: string,
  dto: AssignTechnicianDto,
) {
  await this.getRepairById(id);

  return this.repairRepository.update(id, {
    technician: {
      connect: {
        id: dto.technicianId,
      },
    },

    status: WorkflowStatus.ASSIGNED,
  });
}

  async updateStatus(
    id: string,
    dto: RepairStatusDto,
  ) {
    await this.getRepairById(id);

    return this.repairRepository.update(id, {
      status: dto.status,
    });
  }

  async deleteRepair(id: string) {
    await this.getRepairById(id);

    return this.repairRepository.delete(id);
  }
}