import axios from "axios";
import { BankFormDataType } from "../@Types/Form";
const API_URL = "http://localhost:5000/bank/";

const createBankService = (data:BankFormDataType) => axios.post(API_URL, data);
const updateBankService = (id:string, data:BankFormDataType) => axios.put(`${API_URL}${id}`, data);
const deleteBankService = (id:string) => axios.delete(`${API_URL}${id}`);
const getBankService = (id:string) => axios.get(`${API_URL}${id}`);
const getBanksService = () => axios.get(API_URL);


export {
    createBankService,
    updateBankService,
    deleteBankService,
    getBankService,
    getBanksService,
}