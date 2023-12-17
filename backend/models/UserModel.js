import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
    },
    lastname: {
      type: String,
    },

    phoneNumber: {
      type: String,
    },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    favoriteProperties: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Property" },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
