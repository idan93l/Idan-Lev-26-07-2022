const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true
    },

    email: {
      type: String,
      require: true,
      max: 50,
      unique: true
    },

    password: {
      type: String,
      required: true,
      min: 6
    },

    profilePicture: {
      type: String,
      default: ""
    },

    friends: {
      type: Array,
      default: []
    },

    isAdmin: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
);

const UserModel = mongoose.model("users", userSchema);

module.exports = UserModel;