import mongoose from "mongoose";
const AccountDetailsSchema = new mongoose.Schema(
  {
    accountNumber: {
      type: String,
      unique: true,
      required: "Account Number is required",
    },
    nominee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nominee",
    },
    balance: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Balance",
    },
  },
  { timestamps: true }
);

export default mongoose.model("AccountDetails", AccountDetailsSchema);
