import {
  createAddressService,
  getAddressService,
  getAddressesService,
  updateAddressService,
  deleteAddressService,
} from "../services/address.services.js";

const createAddress = async (req, res) => {
  try {
    const address = await createAddressService(req.body);
    res.status(201).json({
      status: "success",
      message: "Address created successfully",
      data: address,
    });
  } catch (error) {
    res.status(409).json({
      status: "error",
      message: error.message,
    });
  }
};

const getAddress = async (req, res) => {
    try {
        const address = await getAddressService(req.params.id);
        res.status(200).json({
        status: "success",
        message: "Address fetched successfully",
        data: address,
        });
    } catch (error) {
        res.status(404).json({
        status: "error",
        message: error.message,
        });
    }
}

const getAddresses = async (req, res) => {
    try {
        const addresses = await getAddressesService();
        res.status(200).json({
        status: "success",
        message: "Addresses fetched successfully",
        data: addresses,
        });
    } catch (error) {
        res.status(404).json({
        status: "error",
        message: error.message,
        });
    }
}

const updateAddress = async (req, res) => {
    try {
        const address = await updateAddressService(req.params.id, req.body);
        res.status(200).json({
        status: "success",
        message: "Address updated successfully",
        data: address,
        });
    } catch (error) {
        res.status(404).json({
        status: "error",
        message: error.message,
        });
    }
}

const deleteAddress = async (req, res) => {
    try {
        const address = await deleteAddressService(req.params.id);
        res.status(200).json({
        status: "success",
        message: "Address deleted successfully",
        data: address,
        });
    } catch (error) {
        res.status(404).json({
        status: "error",
        message: error.message,
        });
    }
}

export {
    createAddress,
    getAddress,
    getAddresses,
    updateAddress,
    deleteAddress,
}