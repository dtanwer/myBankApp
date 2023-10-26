import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { authStateType } from "../../@Types/auth";
import { loginAction, signupAction } from "./auth.action";

const initialState: authStateType = {
  user: null,
  token: null,
  loading: false,
  message: null,
  type: null,
  modalSignUp: false,
  modalSignIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    deleteError: (state) => {
      state.type = null;
      state.message = null;
    },
    setlogOut: (state) => {
      state.user = null;
      state.token = null;
    },
    setSignUpModal: (state,action: PayloadAction<boolean>) => {
      state.modalSignUp = action.payload;
    },
    setSignInModal: (state,action: PayloadAction<boolean>) => {
      state.modalSignIn = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.modalSignIn = false;
        state.modalSignUp = false;
        state.message = "Login Successfull";
        state.type = "success";
        state.user = action.payload.data;
        console.log(action.payload);
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

    builder
      .addCase(signupAction.fulfilled, (state, action) => {
        state.loading = false;
        state.message = "Signup Successfull";
        state.type = "success";
        console.log(action.payload);
      })
      .addCase(signupAction.pending, (state, action) => {
        state.loading = true;
        state.message = null;
      })
      .addCase(signupAction.rejected, (state, action) => {
        state.loading = false;

        const { message, status } = action.payload as {
          message: string;
          status: "success" | "error" | "warning" | "info";
        };
        state.message = message;
        state.type = status;
        console.log("reject ho gaya !");
      });
  },
});

export const { deleteError, setlogOut,setSignInModal,setSignUpModal } = authSlice.actions;
export default authSlice.reducer;
