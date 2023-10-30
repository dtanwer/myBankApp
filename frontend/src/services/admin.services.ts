import axios from "axios";
import { adminLogin } from "../@Types/admin";
const loginAdminService=(data:adminLogin)=>axios.post("/admin/login",data)
const createEmployeeService=(data:any)=>axios.post("/admin/create-employee",data)

export {loginAdminService,createEmployeeService}