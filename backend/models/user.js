import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    bankId: {
        type: String,
        required: "Bank Id is required"
    },
    name: {
        type: String,
        required: "Name is required"
    },
    email: {
        type: String,
        unique: true ,
        required: "Email is required"
    },
    accountNumber: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Account",
    },
    role:{
        type: String,
        enum: ["employee", "customer","cashier","manager"],
    },
    password: {
        type: String,
        required: "Password is required"
    }
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
