const Story = require("../models/story.model");
const Campaign = require("../models/campaign.model");

const isStoryOwner = (userId, story) => {
    if(userId == story.userId){
        console.log(story.userId)
        return true;
    }else{
        console.log(story.userId)
        return false;
    }
    };
  
  const isAdmin = (user) => {
    return user.role === 1;
  };
  
const checkStoryOwnership = async (req, res, next) => {
  try {
    const  campaignId  = req.params.id; 
    const userId = req.user._id; 
    const campaign = await Campaign.findById(campaignId);
    if (!campaign) {
      return res.status(404).json({ error: "Unauthorized" });
    }

    if (isStoryOwner(userId, campaign) || isAdmin(req.user)) {
      return next();
    } else {
        console.log('un authorized')
      return res.status(403).json({ error: "You are not authorized to edit this story" });
    }
  } catch (error) {
    console.error("Error in checkCampaignOwnership:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = checkStoryOwnership;
