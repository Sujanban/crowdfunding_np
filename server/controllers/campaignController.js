const Campaign = require("../models/campaign.model");
const Story = require("../models/story.model");
const mongoose = require("mongoose");
const cloudinary = require("../utils/cloudinary");

//CREATE CAMPAIGN
const createCampaign = async (req, res) => {
  try {
    const {
      campaignOwner,
      campaignTitle,
      campaignDescription,
      location,
      thumbnail,
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
      return res.status(400).json({ error: "All fields are required" });
    }
    const imageUploadResponse = await cloudinary.uploader.upload(thumbnail, {
      upload_preset: "collab-crowdfunding",
    });

    const thumbnailData = {
      public_id: imageUploadResponse.public_id,
      url: imageUploadResponse.secure_url,
    };
    const newCampaign = new Campaign({
      campaignOwner,
      campaignTitle,
      campaignDescription,
      location,
      thumbnail: thumbnailData,
      goalAmount,
      category,
    });

    await newCampaign.save();
    res.status(201).json({ message: "Campaign created successfully", campaign: newCampaign });
  } catch (err) {
    console.error("Error in createCampaign:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

//GET CAMPAIGN
const updateCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Campaign ID is required" });
    }
    const {
      campaignOwner,
      campaignTitle,
      campaignDescription,
      location,
      thumbnail,
      goalAmount,
      category,
      status,
    } = req.body;

    // console.log(typeof thumbnail)
    // console.log(thumbnail)

   
    if (
      !campaignOwner ||
      !campaignTitle ||
      !campaignDescription ||
      !location ||
      !goalAmount ||
      !category
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }
    const existCampaign = await Campaign.findById(id);
    if (!existCampaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    let thumbnailData = existCampaign.thumbnail;

    if(typeof thumbnail === "string") {
      console.log("can enter thumbnail")
      if (thumbnail) {
        const imageUploadResponse = await cloudinary.uploader.upload(thumbnail, {
          upload_preset: "collab-crowdfunding",
        });
        thumbnailData = {
          public_id: imageUploadResponse.public_id,
          url: imageUploadResponse.secure_url,
        };
        if (existCampaign.thumbnail.public_id) {
          await cloudinary.uploader.destroy(existCampaign.thumbnail.public_id);
        }
      }
    }
    


    const updatedCampaign = await Campaign.findByIdAndUpdate(
      id,
      {
        campaignOwner,
        campaignTitle,
        campaignDescription,
        location,
        thumbnail: thumbnailData,
        goalAmount,
        category,
        status, // Only set status if provided
      },
      { new: true }
    );

    if (updatedCampaign) {
      return res.status(200).json({
        message: "Campaign updated successfully",
        campaign: updatedCampaign,
      });
    } else {
      return res.status(500).json({ error: "Failed to update campaign" });
    }
  } catch (err) {
    console.error("Error during update:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const getCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Campaign ID is required" });
    }
    const existCampaign = await Campaign.findById(id).populate(
      "campaignOwner",
      "firstName lastName email"
    );
    if (!existCampaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    return res.status(200).json(existCampaign);
  } catch (err) {
    console.error("Error fetching campaign:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//GET all CAMPAIGNS
const getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find({});
    return res.status(200).json(campaigns);
  } catch (err) {
    console.error("Error fetching campaigns:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// GET CAMPAIGNS BY USERID
const getCampaignsByUserID = async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }
    const campaigns = await Campaign.find({ campaignOwner: userId });
    return res.status(200).json(campaigns);
  } catch (err) {
    console.error("Error fetching campaigns by user ID:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//DELETE CAMPAIGN
const deleteCampaign = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Campaign ID is required" });
    }
    const campaign = await Campaign.findById(id);
    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }
    if (campaign.thumbnail.public_id) {
      await cloudinary.uploader.destroy(campaign.thumbnail.public_id);
    }
    const deletedCampaign = await Campaign.findByIdAndDelete(id);
    const deleteStory = await Story.deleteMany({ campaignId: id });
    if (deletedCampaign && deleteStory) {
      return res.status(200).json({ message: "Campaign deleted successfully", campaign: deletedCampaign });
    } else {
      return res.status(500).json({ error: "Failed to delete campaign" });
    }
  } catch (err) {
    console.error("Error deleting campaign:", err);
    return res.status(500).json({ error: "Internal server error" });
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
