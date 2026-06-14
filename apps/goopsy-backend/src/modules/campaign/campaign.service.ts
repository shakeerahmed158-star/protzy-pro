import { Injectable } from '@nestjs/common';

import { CampaignRepository } from './campaign.repository';

@Injectable()
export class CampaignService {
  constructor(
    private readonly campaignRepository: CampaignRepository,
  ) {}

  async create(data: any) {
    return this.campaignRepository.create(data);
  }

  async findAll() {
    return this.campaignRepository.findAll();
  }

  async findById(id: string) {
    return this.campaignRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.campaignRepository.update(id, data);
  }

  async delete(id: string) {
    return this.campaignRepository.delete(id);
  }
}