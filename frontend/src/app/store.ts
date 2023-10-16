import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import exp from "constants";
import { useDispatch } from 'react-redux'

const store=configureStore({
    reducer: combineReducers({
        // add reducers here
    })
});


export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 

export default store;