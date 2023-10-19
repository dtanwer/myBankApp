import { loginUserServices, signUpUserServices } from "../services/auth.services.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  try {
    const user = await loginUserServices(req.body);
    if (!user) {
      return res
        .status(400)
        .json({ status: "warning", message: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
  
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
      status: "warning",
      message: error.message,
    });
  }
};

export const signUp = async (req, res) => {
  try {
    const newUser = await signUpUserServices(req.body);
    res.status(200).json({
      status: "success",
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    res.status(400).json({
      status: "warning",
      message: error.message,
    });
  }
};
