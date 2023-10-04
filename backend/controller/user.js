import { getUserServices,getUsersServices,updateUserServices,deleteUserServices } from "../services/user.js";

export const getUsers = async (req, res) => {
  const respnce=await getUsersServices(req, res);
  return respnce;
}

export const getUser = async (req, res) => {
  const respnce=await getUserServices(req, res);
  return respnce;
}

export const updateUser = async (req, res) => {
  const respnce=await updateUserServices(req, res);
  return respnce;
}

export const deleteUser = async (req, res) => {
  const respnce=await deleteUserServices(req, res);
  return respnce;
}