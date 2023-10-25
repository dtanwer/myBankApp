import mongoose from "mongoose";
const AdminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: "Name is required"
    },
    password: {
        type: String,
        required: "Password is required"
    },
    type:{
        type: String,
        enum: ["admin", "superadmin"],
        default: "admin",
    }
}, { timestamps: true });

export default mongoose.model("Admin", AdminSchema);