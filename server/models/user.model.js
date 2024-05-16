const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  freezeBalance: {
    type: Number,
    default: 0,
  },
  accountBalance: {
    type: Number,
    default: 0,
  },
  donations: [
    {
      type: Schema.Types.ObjectId,
      ref: "Donation",
    },
  ],
  bank: {
    type: Schema.Types.ObjectId,
    ref: "Bank",
  },
  role: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("User", UserSchema);
