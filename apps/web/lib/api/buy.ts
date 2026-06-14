import axios from './axios';

export interface BuyFilters {
  brand?: string;
  condition?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}

export interface CreateBuyOrderDto {
  deviceId: string;

  customerName: string;

  mobileNumber: string;

  area: string;

  address: string;

  pincode?: string;
}

//
// GET ALL DEVICES
//
export const fetchProducts =
  async (
    filters?: BuyFilters,
  ) => {

    const response =
      await axios.get('/buy', {
        params: filters,
      });

    return response.data;
  };

//
// GET SINGLE DEVICE
//
export const fetchProduct =
  async (id: string) => {

    const response =
      await axios.get(
        `/buy/${id}`,
      );

    return response.data;
  };

//
// CREATE ORDER
//
export const createBuyOrder =
  async (
    payload: CreateBuyOrderDto,
  ) => {

    const response =
      await axios.post(
        '/buy/create',
        payload,
      );

    return response.data;
  };

//
// GET MY ORDERS
//
export const fetchMyOrders =
  async () => {

    const response =
      await axios.get(
        '/orders/my',
      );

    return response.data;
  };