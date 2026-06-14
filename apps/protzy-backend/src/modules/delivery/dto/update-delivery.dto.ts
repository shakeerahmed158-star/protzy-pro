export class UpdateDeliveryDto {
  trackingNumber?: string;

  courierPartner?: string;

  estimatedDeliveryDate?: Date;

  deliveredAt?: Date;

  deliveryStatus?: string;
}