import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import userModel from "../models/user.js";

export const loginUserServices = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });

    if (!user)
      return res
        .status(400)
        .json({ status: "warning", message: "User does not exist" });

    const isMatch =  bcrypt.compare(password, user.password);


    if (!isMatch)
      return res
        .status(400)
        .json({ status: "warning", message: "Incorrect password" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res
      .cookie("access_token", token, { httpOnly: true, maxAge: 86400000 })
      .status(200)
      .json({
        status: "success",
        message: "User logged in successfully",
        data: user,
      });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

export const signUpUserServices = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new userModel({...req.body, password: hashedPassword});
    await newUser.save();
    res.status(200).json({
      status: "success",
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error.message)
    res.status(400).json({
      status: "warning",
      message: error.message,
    });
  }
};
