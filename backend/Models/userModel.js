import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    identification_number: {
      type: String,
    },
    name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    date_of_birth: {
      type: String,
    },
    date_of_issue: {
      type: String,
    },
    date_of_expiry: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
