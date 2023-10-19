import mongoose from "mongoose";


const AccountSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        unique: true,
    },
    accountType:{
        type: String,
        required: "Account Type is required",
        enum: ["savings", "current"]
    },
    balance:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Balance",
    },
    
}, { timestamps: true });

// AccountSchema.pre("save", async function (next) {
//     this.accountNumber = generateUniqueId({
//         length: 12,
//         useLetters: false,
//     });
//     next();
// });

export default mongoose.model("Account", AccountSchema);