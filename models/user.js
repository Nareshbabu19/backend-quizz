const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  score: {
    type: Number,
    default: 0,
  },
  timespent: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
  },
});

userSchema.methods.toJSON = function () {
  const user = this.toObject();

  delete user.timespent;
  delete user.score;

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
