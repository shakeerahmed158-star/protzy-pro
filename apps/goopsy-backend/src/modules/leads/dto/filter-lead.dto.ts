import {
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

import { WorkflowStatus } from '@prisma/client';

export class FilterLeadDto {
  @IsOptional()
  @IsEnum(WorkflowStatus)
  status?: WorkflowStatus;

  @IsOptional()
  @IsString()
  dealerId?: string;

  @IsOptional()
  @IsString()
  userId?: string;
}