import { Module } from '@nestjs/common';

import { PrismaService } from '../../shared/prisma/prisma.service';

import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryRepository } from './category.repository';

@Module({
  controllers: [CategoryController],

  providers: [
    PrismaService,
    CategoryService,
    CategoryRepository,
  ],

  exports: [
    CategoryService,
    CategoryRepository,
  ],
})
export class CategoryModule {}