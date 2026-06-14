export class CreateReservationDto {
  userId: string;

  productId?: string;

  inventoryId?: string;

  dealerId?: string;

  quantity?: number;

  notes?: string;

  expiresAt?: Date;
}