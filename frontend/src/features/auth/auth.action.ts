import { createAsyncThunk } from "@reduxjs/toolkit";
import {loginType, signupType} from "./auth.type";
import { loginService, signUpService } from "../../services/auth.services";
import { loginFormDataType,signUpFormDataType } from "../../@Types/Form";
import { AxiosError } from "axios";

const loginAction=createAsyncThunk(loginType, async (loginDetails:loginFormDataType, thunkAPI)=>{
    try{
        const response=await loginService(loginDetails);
        const data=await response.data;
        return data;
    }
    catch(error){
        return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
})

const signupAction=createAsyncThunk(signupType, async (signUpDetails:signUpFormDataType, thunkAPI)=>{
    console.log(signUpDetails,"--------------->")
    try{
        const response=await signUpService(signUpDetails);
        const data=await response.data;
        return data;
    }
    catch(error){
        console.log(error,"--------------->")
        return thunkAPI.rejectWithValue((error as AxiosError).response?.data);
    }
})


export {loginAction, signupAction};