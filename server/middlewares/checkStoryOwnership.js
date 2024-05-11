const Story = require("../models/story.model");
const mongoose = require("mongoose");

const checkStoryOwnership = async (req, res, next) => {
  try {
    const storyId = req.params.id;
    const userId = req.user._id; 
    const userRole = req.user.role;
    const isAdmin = userRole === 1;


    const story = await Story.findById(storyId);

    if (!story) {
      return res.status(404).json({ error: "Story not found" });
    }

    if( isAdmin){
       return next();
    }
    if (!story.userId.equals(userId)) {
      return res.status(403).json({ error: "You don't have permission to delete this story" });
    }
    next()
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occurred while checking story ownership" });
  }
};

module.exports = checkStoryOwnership;
