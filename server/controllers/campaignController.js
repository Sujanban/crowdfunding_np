const Campaign = require("../models/campaign.model");
const mongoose = require("mongoose");

//CREATE CAMPAIGN
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

//GET CAMPAIGN
const getCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.json({ error: "Id is required" });

    const existCampaign = await Campaign.findById(id);
    if (!existCampaign) return res.json({ error: "Campaign not found" });

    res.json(existCampaign);
  } catch (err) {
    res.json({ error: err.message });
  }
};

//GET CAMPAIGNS
const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({});
    res.json(campaigns);
  } catch (err) {
    res.json({ error: err.message });
  }
};

//UPDATE CAMPAIGN
const updateCampaign = async (req, res) => {
  try {
    const { id } = req.params;
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

    if (!id) return res.json({ error: "Id is required" });

    const existCampaign = await Campaign.findById(id);
    if (!existCampaign) return res.json({ error: "Campaign not found" });

    const updated = await Campaign.findByIdAndUpdate(
      campaignOwner,
      campaignTitle,
      campaignDescription,
      location,
      thumbnail,
      videoUrl,
      goalAmount,
      category
    );
    if (updated) {
      res.json({ message: "Campaign updated successfully" });
    }
    if (!updated) return res.json({ error: "Error occured updatng campaign" });
  } catch (err) {
    res.json({ error: err.message });
  }
};

//DELETE CAMPAIGN
const deleteCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Campaign.findByIdAndDelete(id);
    if (del) {
      res.json({ message: "Campaign deleted successfully" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = {
  createCampaign,
  getCampaign,
  getCampaigns,
  updateCampaign,
  deleteCampaign,
};
