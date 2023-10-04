import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Name is required"
    },
    email: {
        type: String,
        required: "Email is required"
    },
    password: {
        type: String,
        required: "Password is required"
    }
});

export default mongoose.model("User", UserSchema);