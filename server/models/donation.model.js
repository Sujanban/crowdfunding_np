const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonationSchema = new Schema({
  campaignId: {
    type: Schema.Types.ObjectId,
    ref: "Campaign",
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  paymentMethod: {
    type: String,
  },
  transactionId: {
    type: String,
  },
  session: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Donation", DonationSchema);
