import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const url = process.env.MONGO_URI;

const connectDB=() => {
  mongoose
    .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("🗃️  Database connected successfully");
    })
    .catch((err) => {
      console.log("Database connection failed", err);
    });
};

export default connectDB;