import axios from "axios";
import { loginFormDataType, signUpFormDataType } from "../@Types/Form";
const loginService = (data:loginFormDataType) =>  axios.post("/auth/login", data);
const signUpService = (data:signUpFormDataType) => axios.post("/auth/signup", data);


export { loginService, signUpService };