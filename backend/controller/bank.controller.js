import {
    postBankServices,
    getBanksServices,
    getBankServices,
    updateBankServices,
    deleteBankServices,

} from "../services/bank.services.js";

const postBank = async (req, res) => {
    try {
        const result = await postBankServices(req.body);
        res.status(200).json({
            status: "success",
            message: "Bank created successfully",
            data: result,
        });
    } catch (error) {
        res.status(400).json({
            status: "warning",
            message: error.message,
        });
    }
}

const getBanks = async (req, res) => {
    try {
        const banks = await getBanksServices();
        res.status(200).json({
            status: "success",
            message: "Banks fetched successfully",
            banksLength: banks.length,
            data: banks,
        });
    } catch (error) {
        res.status(400).json({
            status: "warning",
            message: error.message,
        });
    }
}

const getBank = async (req, res) => {
    try {
        const bank = await getBankServices(req);
        res.status(200).json({
            status: "success",
            message: "Bank fetched successfully",
            data: bank,
        });
    } catch (error) {
        res.status(400).json({
            status: "warning",
            message: error.message,
        });
    }
}

const updateBank = async (req, res) => {
    try {
        const updatedBank = await updateBankServices(req);
        res.status(200).json({
            status: "success",
            message: "Bank updated successfully",
            data: updatedBank,
        });
    } catch (error) {
        res.status(400).json({
            status: "warning",
            message: error.message,
        });
    }
}


const deleteBank = async (req, res) => {
    try {
        const deletedBank = await deleteBankServices(req);
        res.status(200).json({
            status: "success",
            message: "Bank deleted successfully",
            data: deletedBank,
        });
    } catch (error) {
        res.status(400).json({
            status: "warning",
            message: error.message,
        });
    }
}

export {
    postBank,
    getBanks,
    getBank,
    updateBank,
    deleteBank,
};