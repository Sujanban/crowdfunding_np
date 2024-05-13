const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PayoutRequestSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    campaignId: {
        type: Schema.Types.ObjectId,
        ref: "Campaign",
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("PayoutRequest", PayoutRequestSchema)