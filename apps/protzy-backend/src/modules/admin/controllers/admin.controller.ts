import {
  Controller,
  Get,
  Patch,
  Param,
} from '@nestjs/common';

import { AdminService } from '../services/admin.service';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
  ) {}

  @Get('dashboard')
  async getDashboard() {
    return this.adminService.getDashboard();
  }

  @Get('dealers/pending')
  async getPendingDealers() {
    return this.adminService.getPendingDealers();
  }

  @Patch('dealer/approve/:id')
  async approveDealer(
    @Param('id') id: string,
  ) {
    return this.adminService.approveDealer(id);
  }

  @Patch('dealer/reject/:id')
  async rejectDealer(
    @Param('id') id: string,
  ) {
    return this.adminService.rejectDealer(id);
  }
}