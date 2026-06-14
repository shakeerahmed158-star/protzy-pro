import {
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

import { WorkflowStatus } from '@prisma/client';

export class FilterSellDto {
  @IsOptional()
  @IsEnum(WorkflowStatus)
  status?: WorkflowStatus;

  @IsOptional()
  @IsString()
  customerId?: string;

  @IsOptional()
  @IsString()
  dealerId?: string;
}