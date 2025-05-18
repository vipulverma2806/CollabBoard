const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImageURL: { type: String, default: null },
    role: { type: String, enum: ["admin", "member"], default: "member" },
  },

  { timestamps: true }
);

module.exports = mongoose.model("UserSchema", userSchema);
