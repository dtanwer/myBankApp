import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import  authReducer  from "../features/auth/auth.slice";
import { useDispatch } from 'react-redux'

const store=configureStore({
    reducer: combineReducers({
       auth:authReducer
    })
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;