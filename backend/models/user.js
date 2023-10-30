import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    bankId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Bank",
    },
    name: {
        type: String,
        required: "Name is required"
    },
    email: {
        type: String,
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
