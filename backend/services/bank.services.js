import BankModel from "../models/bank.js";

const postBankServices = async (body) => {
  const bank = new BankModel(body);
  const result = await bank.save();
  return result;
};

const getBanksServices = async () => {
  const banks = await BankModel.find({});
  return banks;
};

const getBankServices = async (req) => {
  const bank = await BankModel.findById(req.params.id);
  return bank;
};

const updateBankServices = async (req) => {
  const updatedBank = await BankModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );
  return updatedBank;
};

const deleteBankServices = async (req) => {
  const deletedBank = await BankModel.findByIdAndDelete(req.params.id);
  return deletedBank;
};

export {
  postBankServices,
  getBanksServices,
  getBankServices,
  updateBankServices,
  deleteBankServices,
};
