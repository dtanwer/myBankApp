import { createSlice } from "@reduxjs/toolkit";
import { addressStateType } from "../../@Types/address";
import {
  createAddressAction,
  deleteAddressAction,
  getAddressAction,
  getAddressesAction,
  updateAddressAction,
} from "./address.action";

const initialState: addressStateType = {
  addresses: [],
  address: null,
  loading: false,
  message: null,
  type: null,
};

const addressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    deleteError: (state) => {
      state.type = null;
      state.message = null;
    },
    setAddresses: (state, action) => {
      state.addresses = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAddressesAction.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = action.payload;
      })
      .addCase(getAddressesAction.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(getAddressesAction.rejected, (state, action) => {
        state.loading = false;
        const { message, status } = action.payload as {
          message: string;
          status: "success" | "error" | "warning" | "info";
        };
        state.message = message ?? "Server Error";
        state.type = status ?? "error";
      });

    builder
      .addCase(getAddressAction.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload;
      })
      .addCase(getAddressAction.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(getAddressAction.rejected, (state, action) => {
        state.loading = false;
        const { message, status } = action.payload as {
          message: string;
          status: "success" | "error" | "warning" | "info";
        };
        state.message = message ?? "Server Error";
        state.type = status ?? "error";
      });

    builder
      .addCase(createAddressAction.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses.push(action.payload.data);
        state.address = action.payload.data;
        state.message = "Address Created Successfully";
        state.type = "success";
      })
      .addCase(createAddressAction.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(createAddressAction.rejected, (state, action) => {
        state.loading = false;
        const { message, status } = action.payload as {
          message: string;
          status: "success" | "error" | "warning" | "info";
        };
        state.message = message ?? "Server Error";
        state.type = status ?? "error";
      });
    builder
      .addCase(updateAddressAction.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload;
        state.message = "Address Updated Successfully";
        state.type = "success";
      })
      .addCase(updateAddressAction.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(updateAddressAction.rejected, (state, action) => {
        state.loading = false;
        const { message, status } = action.payload as {
          message: string;
          status: "success" | "error" | "warning" | "info";
        };
        state.message = message ?? "Server Error";
        state.type = status ?? "error";
      });

    builder
      .addCase(deleteAddressAction.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses = state.addresses.filter(
          (address) => address._id !== action.payload._id
        );
        state.message = "Address Deleted Successfully";
        state.type = "success";
      })
      .addCase(deleteAddressAction.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(deleteAddressAction.rejected, (state, action) => {
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

export const { deleteError, setAddresses, setAddress } = addressSlice.actions;
export default addressSlice.reducer;
