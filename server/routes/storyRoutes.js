const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  addStory,
  getStories,
  deleteStory,
} = require("../controllers/storyControlller");

const { checkAuth } = require("../middlewares/userAuth");

const checkCampaignOwnership = require("../middlewares/campaignPermission");
const checkStoryOwnership = require("../middlewares/checkStoryOwnership");

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.get("/getStory/:id", getStories);
router.post("/addStory/:id", checkAuth, checkCampaignOwnership, addStory);
router.delete(
  "/deleteStory/:id",
  checkAuth,
  checkStoryOwnership,
  deleteStory
);

module.exports = router;
