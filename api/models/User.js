import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = new Schema({
  user: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  name: {
    type: String,
    required: true
  }
});

userSchema.pre("save", async function(next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

const User = model("userSchema", userSchema);

export default User;
