const Campaign = require("../models/campaign.model");
const Story = require("../models/story.model");
const mongoose = require("mongoose");
const cloudinary = require('../utils/cloudinary');

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

    // cloudinary file upload
    const imageUploadResponse = await cloudinary.uploader.upload(thumbnail, {
      upload_preset: "collab-crowdfunding",
    });
    console.log(imageUploadResponse);
    const thumbnailUrl = imageUploadResponse.url;


    const newCampaign = new Campaign({
      campaignOwner,
      campaignTitle,
      campaignDescription,
      location,
      thumbnail : thumbnailUrl,
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
      status,
    } = req.body;

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
    let updated;
    if (status) {
      updated = await Campaign.findByIdAndUpdate(
        id,
        {
          campaignOwner,
          campaignTitle,
          campaignDescription,
          location,
          thumbnail,
          videoUrl,
          goalAmount,
          category,
          status,
        },
        { new: true }
      );
    } else {
      updated = await Campaign.findByIdAndUpdate(
        id,
        {
          campaignOwner,
          campaignTitle,
          campaignDescription,
          location,
          thumbnail,
          videoUrl,
          goalAmount,
          category,
        },
        { new: true }
      );
    }

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

//GET all CAMPAIGNS
const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({});
    return res.json(campaigns);
  } catch (err) {
    return res.json({ error: err.message });
  }
};

// GET CAMPAIGNS BY USERID
const getCampaignsByUserID = async (req, res) => {
  try {
    const userId = req.params.userId;
    // const userId = req.user._id;
    // console.log(userId);
    if (!userId) return res.json({ error: "Id is required" });
    const campaigns = await Campaign.find({ campaignOwner: userId });
    return res.json(campaigns);
  } catch (err) {
    return res.json({ error: err.message });
  }
};

//DELETE CAMPAIGN
const deleteCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await Campaign.findByIdAndDelete(id);
    const del2 = await Story.deleteMany({ campaignId: id });
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
  getCampaignsByUserID,
  updateCampaign,
  deleteCampaign,
};
