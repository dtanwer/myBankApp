import mongoose from "mongoose";

const PersonalDetailsSchema = new mongoose.Schema(
  {
    accountNumber: {
      type: String,
      unique: true,
      required: "Account Number is required",
    },
    userImage: {
      type: String,
    },
    maritalStatus: {
      type: String,
      enum: ["single", "married"],
    },
    dob:{
      type:Date,
      required: "Date of birth is required"
    },
    contactNumber: {
      type: String,
      required: "Contact Number is required",
    },
    alternateContactNumber: {
      type: String,
    },
    parmanentAddress: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Address",
      required: "Parmanent Address is required",
    },
    currentAddress: {
      currentAddressIndex: Number,
      addresses: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Address",
        },
      ],
    },
    occupation: {
      type: String,
      required: "Occupation is required",
    },
    socialIds: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SocialIds",
    },
  },
  { timestamps: true }
);

export default mongoose.model("PersonalDetails", PersonalDetailsSchema);
