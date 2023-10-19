import mongoose from "mongoose";
const NomineeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    relation: {
      type: String,
      required: "Relation is required",
      enum: [
        "father",
        "mother",
        "brother",
        "sister",
        "son",
        "daughter",
        "husband",
        "wife",
        "grandfather",
        "grandmother",
        "grandson",
        "granddaughter",
        "friend",
      ],
    },
    personalDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PersonalDetail",
    },
  },{ timestamps: true });

export default mongoose.model("Nominee", NomineeSchema);
