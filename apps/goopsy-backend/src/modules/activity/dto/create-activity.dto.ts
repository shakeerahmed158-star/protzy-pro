export class CreateActivityDto {
  userId?: string;

  type: string;

  action: string;

  module?: string;

  entityId?: string;

  description?: string;

  metadata?: any;
}