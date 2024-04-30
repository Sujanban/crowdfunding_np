const express = require("express");
const router = express.Router();
const cors = require("cors");
const { checkAuth, isAdmin } = require("../middlewares/userAuth");
const { createDonation, fetchAllDonation, fetchDonation, fetchWebhook } = require("../controllers/donationController");

// middleware
router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.post("/createDonation/:campaignId", checkAuth, createDonation);
router.post("/webhook",express.raw({ type: "application/json" }), fetchWebhook)

router.get("/fetchAllDonation/", checkAuth, fetchAllDonation);
router.get("/fetchDonation/:id", checkAuth, fetchDonation);

module.exports = router