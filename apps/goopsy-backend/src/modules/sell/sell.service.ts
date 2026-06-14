import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';

import { WorkflowStatus } from '@prisma/client';

import { SellRepository } from './sell.repository';

import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { FilterSellDto } from './dto/filter-sell.dto';

@Injectable()
export class SellService {
  constructor(
    private readonly sellRepository: SellRepository,
  ) {}

  // 🚀 CREATE SELL LEAD
  async createSellLead(
    userId: string,
    body: CreateSellDto,
  ) {
    const {
      brand,
      model,
      variant,
      storage,
      condition,
      expectedPrice,
      location,
    } = body;

    // ✅ VALIDATION
    if (!brand || !model || !condition) {
      throw new BadRequestException(
        'Brand, model and condition are required',
      );
    }

    // ✅ CREATE LEAD
    const lead =
      await this.sellRepository.create({
        userId,

        brand,
        model,

        variant: variant || null,
        storage: storage || null,

        condition,

        expectedPrice:
          expectedPrice !== undefined
            ? Number(expectedPrice)
            : null,

        location: location || null,

        status: WorkflowStatus.PENDING,
      });

    return {
      success: true,
      message:
        'Sell lead created successfully',
      data: lead,
    };
  }

  // 📦 GET MY SELL LEADS
  async getMySellLeads(
    userId: string,
  ) {
    return this.sellRepository.findAll({
      customerId: userId,
    });
  }

  // 🔥 GET SINGLE LEAD
  async getLeadById(id: string) {
    const lead =
      await this.sellRepository.findById(
        id,
      );

    if (!lead) {
      throw new NotFoundException(
        'Lead not found',
      );
    }

    return lead;
  }

  // 📋 GET ALL LEADS
  async findAll(
    filters: FilterSellDto,
  ) {
    return this.sellRepository.findAll(
      filters,
    );
  }

  // ✏️ UPDATE LEAD
  async update(
    id: string,
    dto: UpdateSellDto,
  ) {
    await this.getLeadById(id);

    return this.sellRepository.update(
      id,
      dto,
    );
  }

  // 🗑️ DELETE LEAD
  async remove(id: string) {
    await this.getLeadById(id);

    return this.sellRepository.delete(
      id,
    );
  }
}