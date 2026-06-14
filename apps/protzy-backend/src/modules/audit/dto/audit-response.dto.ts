export class AuditResponseDto {
  id: string;

  userId?: string;

  action: string;

  module: string;

  description?: string;

  createdAt: Date;
}