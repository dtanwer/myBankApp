import BalanceModel from '../models/balance.js';

const postBalanceServices = async (body) => {
  const balance = new BalanceModel(body);
  const result = await balance.save();
  return result;
}

export  {postBalanceServices};