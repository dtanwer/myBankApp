import { createAsyncThunk } from "@reduxjs/toolkit";
import { createEmployeeType, loginType } from "./admin.type";
import { loginAdminService } from "../../services/admin.services";
import { adminLogin } from "../../@Types/admin";
import { AxiosError } from "axios";

const loginAction = createAsyncThunk(
  loginType,
  async (loginDetails: adminLogin, thunkAPI) => {
    try {
      const response = await loginAdminService(loginDetails);
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

const createEmployeeAction = createAsyncThunk(
  createEmployeeType,
  async (details: any, thunkAPI) => {
    try {
      const response = await loginAdminService(details);
      const data = await response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
  }
);

export { loginAction, createEmployeeAction };
