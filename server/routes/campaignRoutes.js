const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  createCampaign,
  getCampaign,
  getCampaigns,
  getCampaignsByUserID,
  updateCampaign,
  deleteCampaign,
} = require("../controllers/campaignController");

const multer = require("multer");
const { checkAuth, isAdmin } = require("../middlewares/userAuth");
const checkCampaignOwnership = require("../middlewares/campaignPermission");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

router.post("/upload", upload.single("file"), (req, res) => {
  console.log(req.file);
});

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//CREATE CAMPAIGN
router.post("/createCampaign", checkAuth, createCampaign);
// router.post("/createCampaign", upload.single('file'), createCampaign);

//GET CAMPAIGN
router.get("/getCampaign/:id", getCampaign);

//GET CAMPAIGNS
router.get("/getCampaigns", getCampaigns);

// GET CAMPAIGNS BY USERID
router.get(
  "/getCampaignsByUserID/:userId",
  checkAuth,
  getCampaignsByUserID
);

// UPDATE CAMPAIGN
router.put(
  "/updateCampaign/:id",
  checkAuth,
  checkCampaignOwnership,
  updateCampaign
);

// DELETE CAMPAIGN
router.delete(
  "/deleteCampaign/:id",
  checkAuth,
  checkCampaignOwnership,
  deleteCampaign
);

// UPLOAD IMAGE

module.exports = router;
