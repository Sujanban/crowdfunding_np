const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CampaignUpdateSchema = new Schema({
  campaignId: {
    type: Schema.Types.ObjectId,
    ref: 'Campaign',
    required: true
  },
  updateContent: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("CampaignUpdate", CampaignUpdateSchema);
