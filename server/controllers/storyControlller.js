const Campaign = require("../models/campaign.model");
const Story = require("../models/story.model");
const mongoose = require("mongoose");

const getStory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Campaign ID is required" });
    }

    const updates = await Story.find({ campaignId: id });

    return res.status(200).json(updates); 
  } catch (error) {
    console.error("Error retrieving story updates:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


const updateStory = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const { updateContent } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Campaign ID is required" });
    }
    if (!updateContent) {
      return res.status(400).json({ error: "Update content is required" });
    }

    const newUpdate = new Story({
      userId,
      campaignId: id,
      updateContent,
    });
    await newUpdate.save();

    return res.status(200).json({ message: "Progress updated successfully" });
  } catch (error) {
    console.error("Error updating story:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};


module.exports = { updateStory, getStory };
