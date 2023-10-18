import mongoose from "mongoose";

const PersonalDetailsSchema = new mongoose.Schema(
  {
    parmanentAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: "Parmanent Address is required",
    },
    temporaryAddress: {
      currentAddressIndex: Number,
      addresses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Address",
        },
      ],
    },
  },
  { timestamps: true }
);

export default mongoose.model("PersonalDetails", PersonalDetailsSchema);
