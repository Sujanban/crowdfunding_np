const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BankAccount = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  stripeAccountId: {
    type: String,
    unique: true,
  },
  availableBalance: {
    type: Number,
  },
});

module.exports = mongoose.model("BankAccount", BankAccount);
