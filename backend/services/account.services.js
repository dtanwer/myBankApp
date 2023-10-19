import AccountModel from '../models/account.js';
import generateAccountNumber from '../utils/genrateAccountNumber.js';
import { postBalanceServices } from './balance.services.js';

const postAccountServices = async (body) => {
  const accountNumber = generateAccountNumber();
  const {_id:balance} = await postBalanceServices({accountNumber});
  const account = new AccountModel({ ...body, accountNumber, balance});
  const result = await account.save();
  return result;
}



export {postAccountServices};