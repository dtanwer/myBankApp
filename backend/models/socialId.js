import mongoose from "mongoose";
const SocialIdSchema = new mongoose.Schema({
    linkedin: {
        type: String,
    },
    facebook: {
        type: String,
    },
    twitter: {
        type: String,
    },
    instagram: {
        type: String,
    },
}, { timestamps: true });

export default mongoose.model("SocialId", SocialIdSchema);