import addressModel from "../models/address.js";

const createAddressService = async (address) => {
  try {
    
    return await addressModel.create(address);
  } catch (error) {
    throw new Error(error);
  }
};

const getAddressService = async (id) => {
  try {
    return await addressModel.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

const getAddressesService = async () => {
  try {
    return await addressModel.find();
  } catch (error) {
    throw new Error(error);
  }
};

const updateAddressService = async (id, address) => {
  try {
    return await addressModel.findByIdAndUpdate(id, address, { new: true });
  } catch (error) {
    throw new Error(error);
  }
};

const deleteAddressService = async (id) => {
  try {
    return await addressModel.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};


export {
    createAddressService,
    getAddressService,
    getAddressesService,
    updateAddressService,
    deleteAddressService,
}