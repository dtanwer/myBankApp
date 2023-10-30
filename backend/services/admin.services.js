import UserModel from "../models/user.js";

const createEmployeeServices = async (body) => {
  try {
    const user = new UserModel({ ...body, role: "employee" });
    const result = await user.save();
    return result;
  } catch (error) {
    throw new Error(error.message);
  }
};




export { createEmployeeServices };
