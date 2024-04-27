const User = require("../models/user.model");
const Campaign = require("../models/campaign.model");

const fetchUsers = async (req, res) => {
  try {
    const users = await User.find({});
    if (!users) {
      res.json({ error: "No User Found" });
    }
    res.json(users);
  } catch (err) {
    return res.json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
    try{
        const userId = req.params.userId;
        
        const deleteUser = await User.findByIdAndDelete(userId) && await Campaign.deleteMany({ campaignOwner: userId });
        if(!deleteUser) {
            return res.json({ error: "Error deleting User!" });
        }else{
            return res.json({message: "User deleted Sucessfully!" });
        }
    }catch(err){
        return res.json({ error: err.message });
    }
};

module.exports = { fetchUsers,deleteUser };
