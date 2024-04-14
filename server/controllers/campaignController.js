const Campaign = require("../models/campaign.model");
const mongoose = require("mongoose");


//CREATE CAMPAIGN
const createCampaign = async (req, res) => {
  try {
    // if (req) {
    //   console.log(req);
    // }
    // if (req.file) {
    //   console.log(req.file);
    // }
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

    console.log(req.body);

    // Check if required fields are present in the request body
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

    // Check if the ID is provided
    if (!id) return res.json({ error: "Id is required" });

    // Find the campaign by ID
    const existCampaign = await Campaign.findById(id);
    if (!existCampaign) return res.json({ error: "Campaign not found" });

    // Update the campaign
    const updated = await Campaign.findByIdAndUpdate(
      id, 
      { 
        campaignOwner,
        campaignTitle,
        campaignDescription,
        location,
        thumbnail,
        videoUrl,
        goalAmount,
        category
      },
      { new: true } 
    );

    // Check if the update was successful
    if (updated) {
      return res.json({ message: "Campaign updated successfully", updated });
    } else {
      return res.json({ error: "Something went wrong" });
    }
  } catch (err) {
    // Catch any errors that occur during the update process
    return res.json({ error: err.message });
  }
};

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
const updateCampaignnnnnn = async (req, res) => {
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

    console.log(req.body);

    
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
    if (!updated) return res.json({ error : "Something went wrong" });
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
