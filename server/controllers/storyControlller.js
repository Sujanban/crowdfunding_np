const Campaign = require("../models/campaign.model");
const Story = require("../models/story.model");
const mongoose = require("mongoose");

const updateStory = async (req, res) => {
  try {
    const { id } = req.params;
    const { updateContent } = req.body;

    if(!id){
      return res.status(400).json({ error: "Invalid campaign" });
    }

    if(!updateContent) {
      return res.status(400).json({ error: "Update content is required" });
    }

    // Create a new update
    const newUpdate = new Story({
      campaignId: id,
      updateContent: updateContent,
    });

    // Save the new update
    await newUpdate.save();

    // Add the update to the campaign's updates array
    await Campaign.findByIdAndUpdate(id, { $push: { updates: newUpdate._id } });

    res.status(201).json({ message: "Progress Updated Sucessfully" });
  } catch (error) {
    console.error("Error updating Campaign progress:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { updateStory };
