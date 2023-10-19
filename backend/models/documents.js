import mongoose from "mongoose";

const DocumentSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        unique: true,
        required: "Account Number is required",
    },
    addharCard:{
        type: String,
        required: "Addhar Card is required",
    },
    panCard:{
        type: String,
    },
    passport:{
        type: String,
    },
    voterId:{
        type: String,
    },
    drivingLicense:{
        type: String,
    },
},{ timestamps: true });

export default mongoose.model("Document", DocumentSchema);