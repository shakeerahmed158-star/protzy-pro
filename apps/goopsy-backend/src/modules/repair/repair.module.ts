import { Module } from '@nestjs/common';
import { RepairController } from './repair.controller';
import { RepairService } from './repair.service';
import { RepairRepository } from './repair.repository';
import { PrismaService } from '../../shared/prisma/prisma.service';

@Module({
  controllers: [RepairController],
  providers: [
    RepairService,
    RepairRepository,
    PrismaService,
  ],
  exports: [RepairService],
})
export class RepairModule {}