import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { adminStateType } from "../../@Types/admin";
import { loginAction } from "./admin.action";

const initialState: adminStateType = {
  admin: null,
  token: null,
  loading: false,
  message: null,
  type: null,
};

export const adminSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    deleteError: (state) => {
      state.type = null;
      state.message = null;
    },
    setlogOut: (state) => {
      state.admin = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.message = "Login Successfull";
        state.type = "success";
        state.admin = action.payload.admin;
      })
      .addCase(loginAction.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        
        const { message, status } = action.payload as {
          message: string;
          status: "success" | "error" | "warning" | "info";
        };
        state.message = message;
        state.type = status;
        console.log("reject ho gaya !",action.payload);
      });
  },
});

export const { deleteError, setlogOut } = adminSlice.actions;
export default adminSlice.reducer;
