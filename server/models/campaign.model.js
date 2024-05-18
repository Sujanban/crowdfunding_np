const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CampaignSchema = new schema(
  {
    campaignOwner: {
      type: schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    campaignTitle: {
      type: String,
      required: true,
    },
    campaignDescription: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: Object,
      required: true,
    },
    goalAmount: {
      type: Number,
      required: true,
    },

    raisedAmount: {
      type: Number,
      default: 0,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      required: true,
    },
    updates: [
      {
        type: schema.Types.ObjectId,
        ref: "CampaignUpdate",
      },
    ],
    status: {
      type: String,
      enum: ["active", "completed"],
      default: "active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Campaign", CampaignSchema);
