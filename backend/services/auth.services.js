import bcrypt from "bcryptjs";
import userModel from "../models/user.js";

export const loginUserServices = async (body) => {
  const { email } = body;
  const user = await userModel.findOne({ email });
  return user;
};

export const signUpUserServices = async (body) => {
  const hashedPassword = await bcrypt.hash(body.password, 10);
  const newUser = new userModel({ ...body, password: hashedPassword });
  await newUser.save();
  return newUser;
};
