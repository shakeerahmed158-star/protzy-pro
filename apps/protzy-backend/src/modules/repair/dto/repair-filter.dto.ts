import {
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

import { WorkflowStatus } from '@prisma/client';

export class RepairFilterDto {
  @IsOptional()
  @IsEnum(WorkflowStatus)
  status?: WorkflowStatus;

  @IsOptional()
  @IsString()
  dealerId?: string;

  @IsOptional()
  @IsString()
  customerId?: string;
}