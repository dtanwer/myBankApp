import AdminModel from "../models/admin.js";
import { Router } from "express";
import bcrypt from "bcryptjs";
import { createEmployee } from "../controller/admin.controller.js";

const router = Router();

router.post("/create-employee", createEmployee);

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await AdminModel.findOne({ username });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found", status: "warning" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return res
        .status(200)
        .json({ message: "login Success", status: "success",admin:user});
    }

    return res.status(400).json({ message: "Login failed", status: "warning" });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "warning" });
  }
});

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    await AdminModel.create({
      username,
      password: hashedPassword,
    });
    res.status(200).json({ message: "Signup success", status: "success" });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "warning" });
  }
});



export default router;
