import { createEmployeeServices } from "../services/admin.services.js";

const createEmployee = async (req, res) => {
  try {
    const result = await createEmployeeServices(req.body);
    res.status(200).json({ message: "Employee created", status: "success",result });
  } catch (error) {
    res.status(400).json({ message: error.message, status: "warning" });
  }
};

export { createEmployee };
