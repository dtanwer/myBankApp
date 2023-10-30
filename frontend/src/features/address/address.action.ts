import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { AddressFormDataType } from "../../@Types/Form";
import {
  getAddressesServices,
  getAddressServices,
  createAddressServices,
  updateAddressServices,
  deleteAddressServices,
} from "../../services/address.services";
import {
  createAddressType,
  updateAddressType,
  deleteAddressType,
  getAddressType,
  getAddressesType,
} from "./address.type";

const getAddressesAction = createAsyncThunk(
  getAddressesType,
  async (_, thunkAPI) => {
    try {
      const response = await getAddressesServices();
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

const getAddressAction = createAsyncThunk(
  getAddressType,
  async (id: string, thunkAPI) => {
    try {
      const response = await getAddressServices(id);
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

const createAddressAction = createAsyncThunk(
  createAddressType,
  async (data: AddressFormDataType, thunkAPI) => {
    try {
      const response = await createAddressServices(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

const updateAddressAction = createAsyncThunk(
  updateAddressType,
  async ({ id, data }: { id: string; data: AddressFormDataType }, thunkAPI) => {
    try {
      const response = await updateAddressServices(id, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

const deleteAddressAction = createAsyncThunk(
  deleteAddressType,
  async (id: string, thunkAPI) => {
    try {
      const response = await deleteAddressServices(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
  }
);


export {
  getAddressesAction,
  getAddressAction,
  createAddressAction,
  updateAddressAction,
  deleteAddressAction,
};
