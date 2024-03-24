const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  createCampaign,
  getCampaign,
  getCampaigns,
  updateCampaign,
  deleteCampaign,
} = require("../controllers/campaignController");

const multer = require("multer");
const upload = multer({ dest: 'uploads/' })

// const storage = multer.diskStorage({
//   destination: function (req, thumbnail, cb) {
//     cb(null, "public/uploads");
//   },
//   filename: function (req, thumbnail, cb) {
//     const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
//     cb(null, thumbnail.fieldname + "-" + uniqueSuffix);
//   },
// });

// const upload = multer({ storage: storage });

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//CREATE CAMPAIGN
router.post("/createCampaign", upload.single('file'), createCampaign);

//GET CAMPAIGN
router.get("/getCampaign/:id", getCampaign);

//GET CAMPAIGNS
router.get("/getCampaigns", getCampaigns);

// UPDATE CAMPAIGN
router.put("/updateCampaign/:id", updateCampaign);

// DELETE CAMPAIGN
router.delete("/deleteCampaign/:id", deleteCampaign);

// UPLOAD IMAGE

module.exports = router;
