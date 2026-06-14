import {
  IsEnum,
} from 'class-validator';

import { WorkflowStatus } from '@prisma/client';

export class RepairStatusDto {
  @IsEnum(WorkflowStatus)
  status!: WorkflowStatus;
}