const User = require("../models/user.model");
const Campaign = require("../models/campaign.model");
const Story = require("../models/story.model");
const Donation = require("../models/donation.model");

const fetchUsers = async (req, res) => {
  try {
    const users = await User.find({});

    if (users.length === 0) {
      return res.status(404).json({ error: "No users found" });
    }

    return res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const userToDelete = await User.findById(userId);
    if (!userToDelete) {
      return res.status(404).json({ error: "User not found" });
    }

    // Delete user and their campaigns
    await User.findByIdAndDelete(userId);
    await Campaign.deleteMany({ campaignOwner: userId });
    await Story.deleteMany({ userId: userId });
    await Donation.deleteMany({ userId: userId });

    return res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { fetchUsers, deleteUser };
