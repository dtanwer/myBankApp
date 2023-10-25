import axios from "axios";
import { adminLogin } from "../@Types/admin";
const loginAdminService=(data:adminLogin)=>axios.post("/admin/login",data)

export {loginAdminService}