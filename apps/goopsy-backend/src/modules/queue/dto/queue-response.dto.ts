export class QueueResponseDto {
  id: string;

  jobName: string;

  payload?: any;

  status?: string;

  createdAt: Date;
}