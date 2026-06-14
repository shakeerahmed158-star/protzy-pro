import { IsEnum } from 'class-validator';

import { WorkflowStatus } from '@prisma/client';

export class LeadStatusDto {
  @IsEnum(WorkflowStatus)
  status!: WorkflowStatus;
}