import axios from "./axios";

export interface CreateRepairDto {

  deviceId: string;

  issue: string;

  customerName: string;

  mobileNumber: string;

  area: string;

  address: string;
}

////////////////////////////////////////////////////////
// CREATE REPAIR LEAD
////////////////////////////////////////////////////////

export const createRepairLead =
  async (
    payload: CreateRepairDto,
  ) => {

    const response =
      await axios.post(
        "/repair/create",
        payload,
      );

    return response.data;
  };

////////////////////////////////////////////////////////
// GET REPAIR DEVICES
////////////////////////////////////////////////////////

export const fetchRepairDevices =
  async (
    brand?: string,
  ) => {

    const response =
      await axios.get(
        "/repair",
        {
          params: {
            brand,
          },
        },
      );

    return response.data;
  };

////////////////////////////////////////////////////////
// GET SINGLE DEVICE
////////////////////////////////////////////////////////

export const fetchRepairDevice =
  async (id: string) => {

    const response =
      await axios.get(
        `/repair/${id}`,
      );

    return response.data;
  };