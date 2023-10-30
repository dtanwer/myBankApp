import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/user.js";
import adminRoutes from "./routes/admin.route.js";
import addressRoutes from "./routes/address.route.js";
import bankRoutes from "./routes/bank.route.js";


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("API is running...🙏");
});

app.use("/auth", authRoutes);
app.use("/user", userRoutes);
app.use('/admin',adminRoutes);
app.use('/address',addressRoutes);
app.use('/bank',bankRoutes);



export default app;
