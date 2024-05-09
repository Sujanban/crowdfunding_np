const Campaign = require("../models/campaign.model");
const Story = require("../models/story.model");
const mongoose = require("mongoose");

const getStory = async (req, res) => {
  try {
    const { id } = req.params;

    // Find campaign updates with the given campaignId
    const updates = await Story.find({ campaignId: id });

    res.json(updates);
  } catch (error) {
    res.json({ error: error.message });
  }
};

const updateStory = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;


   


    const { updateContent } = req.body;
    if (!id) {
      return res.json({ error: "Invalid campaign" });
    }
    if (!updateContent) {
      return res.json({ error: "Update content is required" });
    }
    // Create a new update
    const newUpdate = new Story({
      campaignId: id,
      updateContent: updateContent,
    });
    // Save the new update
    await newUpdate.save();
    res.json({ message: "Progress Updated Sucessfully" });
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = { updateStory, getStory };
