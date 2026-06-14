export class UpdateCommunicationDto {
  subject?: string;

  message?: string;

  status?: string;

  sentAt?: Date;

  deliveredAt?: Date;

  readAt?: Date;
}