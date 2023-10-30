import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { BankFormDataType } from "../../@Types/Form";
import {
  getBankService,
  createBankService,
  updateBankService,
  deleteBankService,
  getBanksService,
} from "../../services/bank.services";
import {
  createBankType,
  updateBankType,
  deleteBankType,
  getBankType,
  getBanksType,
} from "./bank.type";

const getBanksAction = createAsyncThunk(getBanksType, async (_, thunkAPI) => {
  try {
    const response = await getBanksService();
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
  }
});

const getBankAction = createAsyncThunk(
  getBankType,
  async (id: string, thunkAPI) => {
    try {
      const response = await getBankService(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

const createBankAction = createAsyncThunk(
  createBankType,
  async (data: BankFormDataType, thunkAPI) => {
    try {
      console.log(data)
      const response = await createBankService(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

const updateBankAction = createAsyncThunk(
  updateBankType,
  async ({ id, data }: { id: string; data: BankFormDataType }, thunkAPI) => {
    try {
      const response = await updateBankService(id, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

const deleteBankAction = createAsyncThunk(
  deleteBankType,
  async (id: string, thunkAPI) => {
    try {
      const response = await deleteBankService(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export {
  getBanksAction,
  getBankAction,
  createBankAction,
  updateBankAction,
  deleteBankAction,
};
