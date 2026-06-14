export class CreateTrackingDto {
  orderId?: string;

  deliveryId?: string;

  trackingNumber: string;

  location?: string;

  status?: string;

  message?: string;
}