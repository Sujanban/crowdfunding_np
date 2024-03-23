const Campaign = require("../models/campaign.model");
const mongoose = require("mongoose");

const createCampaign = async (req, res) => {
  try {
    const {
      campaignOwner,
      campaignTitle,
      campaignDescription,
      location,
      thumbnail,
      videoUrl,
      goalAmount,
      category,
    } = req.body;
    if (
      !campaignOwner ||
      !campaignTitle ||
      !campaignDescription ||
      !location ||
      !thumbnail ||
      !goalAmount ||
      !category
    ) {
      return res.json({ error: "All fields are required" });
    }

    const newCampaign = new Campaign({
      campaignOwner,
      campaignTitle,
      campaignDescription,
      location,
      thumbnail,
      videoUrl,
      goalAmount,
      category,
    });

    await newCampaign.save();
     res.json({ message: "Campaign created successfully" });
  } catch (err) {
     res.json({ error: err.message });
  }
};





module.exports = {
  createCampaign,
};
