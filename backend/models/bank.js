import mongoose from "mongoose";
const BankSchema = new mongoose.Schema(
  {
    bankName: {
      type: String,
      required: "Bank Name is required",
    },
    branchName: {
      type: String,
      required: "Branch Name is required",
    },
    ifscCode: {
      type: String,
      required: "IFSC Code is required",
    },
    address: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Bank", BankSchema);