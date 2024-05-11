const Campaign = require("../models/campaign.model");
const Story = require("../models/story.model");

const getStories = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Campaign ID is required" });
    }

    const updates = await Story.find({ campaignId: id }).populate('userId', 'firstName lastName email');

    return res.status(200).json(updates);
  } catch (error) {
    console.error("Error retrieving story updates:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const addStory = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const { updateContent } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Campaign ID is required" });
    }
    if (!updateContent) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const newUpdate = new Story({
      userId,
      campaignId: id,
      updateContent,
    });
    await newUpdate.save();

    const story = await newUpdate.populate('userId', 'firstName lastName email');
    return res
      .status(200)
      .json({ message: "Progress updated successfully", story });
  } catch (error) {
    console.error("Error updating story:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const deleteStory = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ error: "Story ID is required" });
    }

    const deleted = await Story.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ error: "Failed to delete story" });
    }
    return res.status(200).json({ message: "Story deleted successfully", story: deleted });
  } catch (error) {
    console.error("Error deleting story:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { addStory, getStories,deleteStory };
