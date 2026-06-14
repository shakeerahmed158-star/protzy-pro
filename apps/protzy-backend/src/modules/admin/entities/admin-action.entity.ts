export class AdminActionEntity {
  id: string;

  adminId: string;

  action: string;

  targetId: string;

  targetType: string;

  remarks?: string;

  createdAt: Date;
}