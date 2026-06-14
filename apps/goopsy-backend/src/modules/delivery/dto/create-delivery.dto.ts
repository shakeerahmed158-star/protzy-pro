export class CreateDeliveryDto {
  orderId: string;

  userId: string;

  addressId: string;

  trackingNumber?: string;

  courierPartner?: string;

  estimatedDeliveryDate?: Date;

  deliveryStatus?: string;
}