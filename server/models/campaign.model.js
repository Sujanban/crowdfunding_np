const mongoose = require("mongoose");
const schema = mongoose.Schema;

const CampaignSchema = new schema({
  campaignOwner: {
    type: String,
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
    type: String,
    required: true,
  },

  videoUrl: {
    type: String,
    required: true,
  },
  goalAmount: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  updates: [{
    type: schema.Types.ObjectId,
    ref: 'CampaignUpdate'
  }],
  status:{
    type: String,
    enum: ['active', 'completed'],
    default: 'active'
  }
});

module.exports = mongoose.model("Campaign", CampaignSchema);
