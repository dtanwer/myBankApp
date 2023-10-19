import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    street: {
      type: String,
      required: "Street is required",
    },
    city: {
      type: String,
      required: "City is required",
    },
    state: {
      type: String,
      required: "State is required",
    },
    country: {
      type: String,
      required: "Country is required",
    },
    pincode: {
      type: String,
      required: "PinCode is required",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Address", AddressSchema);
