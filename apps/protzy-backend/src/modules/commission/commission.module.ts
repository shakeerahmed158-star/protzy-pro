import { Module } from '@nestjs/common';

import { CommissionController } from './controllers/commission.controller';
import { CommissionService } from './services/commission.service';
import { CommissionRepository } from './repositories/commission.repository';

@Module({
  controllers: [CommissionController],

  providers: [
    CommissionService,
    CommissionRepository,
  ],

  exports: [CommissionService],
})
export class CommissionModule {}