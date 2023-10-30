import axios from "axios";
import { AddressFormDataType } from "../@Types/Form";

const API_URL = "http://localhost:5000/address/";

const getAddressesServices = () => axios.get(API_URL);
const getAddressServices = (id:string) => axios.get(API_URL + id);
const createAddressServices = (data:AddressFormDataType) => axios.post(API_URL, data);
const updateAddressServices = (id:string, data:AddressFormDataType) => axios.put(API_URL + id, data);
const deleteAddressServices = (id:string) => axios.delete(API_URL + id);

export {
    getAddressesServices,
    getAddressServices,
    createAddressServices,
    updateAddressServices,
    deleteAddressServices,
};