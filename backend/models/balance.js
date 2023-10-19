import mongoose from "mongoose";

const BalanceSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        unique: true,
        required: "Account Number is required",
    },
    balance:{
        type: Number,
        required: "Balance is required",
    },
    currency:{
        type: String,
        required: "Currency is required",
        enum: ["INR", "USD"]
    },
}, { timestamps: true });

export default mongoose.model("Balance", BalanceSchema);