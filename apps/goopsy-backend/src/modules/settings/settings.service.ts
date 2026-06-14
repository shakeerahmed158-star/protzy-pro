import { Injectable } from '@nestjs/common';

import { SettingsRepository } from './settings.repository';

@Injectable()
export class SettingsService {
  constructor(
    private readonly settingsRepository: SettingsRepository,
  ) {}

  async create(data: any) {
    return this.settingsRepository.create(data);
  }

  async findAll() {
    return this.settingsRepository.findAll();
  }

  async findById(id: string) {
    return this.settingsRepository.findById(id);
  }

  async update(id: string, data: any) {
    return this.settingsRepository.update(id, data);
  }

  async delete(id: string) {
    return this.settingsRepository.delete(id);
  }
}