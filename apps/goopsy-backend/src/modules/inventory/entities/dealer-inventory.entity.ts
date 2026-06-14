export class DealerInventoryEntity {

  id: string;

  dealerId: string;

  brand: string;

  model: string;

  storage: string;

  color: string;

  batteryHealth: number;

  condition: string;

  quantity: number;

  purchasePrice: number;

  sellingPrice: number;

  imei: string;

  status: string;

  available: boolean;

  reserved: boolean;

  sold: boolean;

  createdAt: Date;
}