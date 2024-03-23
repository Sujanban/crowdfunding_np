const express = require("express");
const router = express.Router();
const cors = require("cors");
const { createCampaign,getCampaign, getCampaigns, updateCampaign, deleteCampaign } = require("../controllers/campaignController");

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//CREATE CAMPAIGN
router.post("/createCampaign", createCampaign);

//GET CAMPAIGN
router.get('/getCampaign/:id', getCampaign)

//GET CAMPAIGNS
router.get('/getCampaigns', getCampaigns)

// UPDATE CAMPAIGN
  router.put('/updateCampaign/:id', updateCampaign)

// DELETE CAMPAIGN
  router.delete('/deleteCampaign/:id', deleteCampaign)



module.exports = router;
