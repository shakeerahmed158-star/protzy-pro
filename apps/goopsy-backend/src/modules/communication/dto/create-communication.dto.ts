export class CreateCommunicationDto {
  userId?: string;

  type: string;

  channel: string;

  subject?: string;

  message: string;

  status?: string;

  sentAt?: Date;
}