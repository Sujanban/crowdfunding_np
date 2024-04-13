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
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

router.post('/upload', upload.single('file'), (req, res) => {
  console.log(req.file)
})

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//CREATE CAMPAIGN
router.post("/createCampaign", createCampaign);
// router.post("/createCampaign", upload.single('file'), createCampaign);

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
