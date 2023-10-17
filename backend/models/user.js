import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required"
    },
    email: {
        type: String,
        unique: true ,
        required: "Email is required"
    },
    password: {
        type: String,
        required: "Password is required"
    }
});

export default mongoose.model("User", UserSchema);
