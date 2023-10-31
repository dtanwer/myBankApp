import { createSlice } from "@reduxjs/toolkit";
import {
  createBankAction,
  deleteBankAction,
  getBankAction,
  getBanksAction,
  updateBankAction,
} from "./bank.action";
import { bankStateType } from "../../@Types/Bank";

const initialState: bankStateType = {
  banks: [],
  bank: null,
  loading: false,
  message: null,
  type: null,
};

const bankSlice = createSlice({
  name: "bank",
  initialState,
  reducers: {
    deleteError: (state) => {
      state.type = null;
      state.message = null;
    },
    setBanks: (state, action) => {
      state.banks = action.payload;
    },
    setBank: (state, action) => {
      state.bank = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBanksAction.fulfilled, (state, action) => {
        state.loading = false;
        state.banks = action.payload.data;
      })
      .addCase(getBanksAction.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(getBanksAction.rejected, (state, action) => {
        state.loading = false;
        const { message, status } = action.payload as {
          message: string;
          status: "success" | "error" | "warning" | "info";
        };
        state.message = message ?? "Server Error";
        state.type = status ?? "error";
      });

    builder
      .addCase(getBankAction.fulfilled, (state, action) => {
        state.loading = false;
        state.bank = action.payload;
      })
      .addCase(getBankAction.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(getBankAction.rejected, (state, action) => {
        state.loading = false;
        const { message, status } = action.payload as {
          message: string;
          status: "success" | "error" | "warning" | "info";
        };
        state.message = message ?? "Server Error";
        state.type = status ?? "error";
      });

    builder
      .addCase(createBankAction.fulfilled, (state, action) => {
        state.loading = false;
        state.banks.push(action.payload);
        state.bank = action.payload;
        state.message = "Bank Created Successfully";
        state.type = "success";
      })
      .addCase(createBankAction.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(createBankAction.rejected, (state, action) => {
        state.loading = false;
        const { message, status } = action.payload as {
          message: string;
          status: "success" | "error" | "warning" | "info";
        };
        state.message = message ?? "Server Error";
        state.type = status ?? "error";
      });
    builder
      .addCase(updateBankAction.fulfilled, (state, action) => {
        state.loading = false;
        state.bank = action.payload;
        state.message = "Bank Updated Successfully";
        state.type = "success";
      })
      .addCase(updateBankAction.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(updateBankAction.rejected, (state, action) => {
        state.loading = false;
        const { message, status } = action.payload as {
          message: string;
          status: "success" | "error" | "warning" | "info";
        };
        state.message = message ?? "Server Error";
        state.type = status ?? "error";
      });

    builder
      .addCase(deleteBankAction.fulfilled, (state, action) => {
        state.loading = false;
        state.banks = state.banks.filter(
          (bank) => bank._id !== action.payload._id
        );
        state.message = "Bank Deleted Successfully";
        state.type = "success";
      })
      .addCase(deleteBankAction.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(deleteBankAction.rejected, (state, action) => {
        state.loading = false;
        const { message, status } = action.payload as {
          message: string;
          status: "success" | "error" | "warning" | "info";
        };
        state.message = message ?? "Server Error";
        state.type = status ?? "error";
      });
  },
});

export const { deleteError, setBanks, setBank } = bankSlice.actions;
export default bankSlice.reducer;
