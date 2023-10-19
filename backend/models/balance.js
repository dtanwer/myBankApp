import mongoose from "mongoose";

const BalanceSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        unique: true,
        required: "Account Number is required",
    },
    balance:{
        type: Number,
        default: 0,
    },
    currency:{
        type: String,
        required: "Currency is required",
        enum: ["INR", "USD"],
        default: "INR",
    },
}, { timestamps: true });

export default mongoose.model("Balance", BalanceSchema);