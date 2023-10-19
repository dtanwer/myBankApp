import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        required: "Account Number is required",
    },
    amount:{
        type: Number,
        required: "Amount is required",
    },
    transactionType:{
        type: String,
        required: "Transaction Mode is required",
        enum: ["Debit", "Credit"]
    },
    transactionDate:{
        type: Date,
        required: "Transaction Date is required",
    },
    transactionStatus:{
        type: String,
        required: "Transaction Status is required",
        enum: ["Success", "Failed"]
    },
    transactionRemarks:{
        type: String,
    },
},{ timestamps: true });

export default mongoose.model("Transaction", TransactionSchema);