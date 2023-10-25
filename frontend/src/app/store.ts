import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth.slice";
import adminReducer from "../features/admin/admin.slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: combineReducers({
    auth: authReducer,
    admin: adminReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
