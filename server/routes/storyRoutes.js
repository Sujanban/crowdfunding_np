const express = require("express");
const router = express.Router();
const cors = require("cors");
const { updateStory, getStory } = require("../controllers/storyControlller");

const {checkAuth} = require("../middlewares/userAuth");


const  checkCampaignOwnership  = require("../middlewares/campaignPermission");

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.get("/getStory/:id", getStory);
router.post("/addStory/:id", checkAuth, checkCampaignOwnership , updateStory);

module.exports = router;
