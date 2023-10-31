import axios from "axios";
import { adminLogin } from "../@Types/admin";
const API_URL = "http://localhost:5000/admin/";
const loginAdminService=(data:adminLogin)=>axios.post(`${API_URL}login`,data)
const createEmployeeService=(data:any)=>axios.post(`${API_URL}create-employee`,data)

export {loginAdminService,createEmployeeService}