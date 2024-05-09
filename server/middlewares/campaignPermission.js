const Campaign = require("../models/campaign.model");

const isCampaignOwner = (userId, campaign) => {
  if(userId == campaign.campaignOwner._id){
    return true;
  }else{
    return false;
  }
  };
  
  const isAdmin = (user) => {
    return user.role === 1;
  };
  
const checkCampaignOwnership = async (req, res, next) => {
  try {
    const { id } = req.params; 
    const userId = req.user._id; 
    const campaign = await Campaign.findById(id);
    if (!campaign) {
      return res.status(404).json({ error: "Campaign not found" });
    }

    if (isCampaignOwner(userId, campaign) || isAdmin(req.user)) {
      return next();
    } else {
      return res.status(403).json({ error: "You are not authorized to edit this campaign" });
    }
  } catch (error) {
    console.error("Error in checkCampaignOwnership:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = checkCampaignOwnership;
