const express = require("express");
const router = express.Router();
const cors = require("cors");
const { checkAuth, isAdmin } = require("../middlewares/userAuth");
const { createDonation,fetchDonationByUser, fetchDonation, fetchDonationByCampaign, fetchDonations, createKhaltiPayment } = require("../controllers/donationController");


// middleware
router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.post("/createDonation/:campaignId", checkAuth, createDonation);
router.post("/createKhaltiPayment/:campaignId", createKhaltiPayment);
router.get("/getDonations/", checkAuth, fetchDonations);
router.get("/fetchDonation/:id", checkAuth, fetchDonation);
router.get("/fetchDonationByUser/:userId", checkAuth, fetchDonationByUser);
router.get("/fetchDonationByCampaign/:campaignId", fetchDonationByCampaign);

module.exports = router