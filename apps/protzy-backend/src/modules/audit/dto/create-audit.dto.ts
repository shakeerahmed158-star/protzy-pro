export class CreateAuditDto {
  userId?: string;

  action: string;

  module: string;

  description?: string;
}