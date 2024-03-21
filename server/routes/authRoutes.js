const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  handleRegister,
  handleLogin,
  handleLogout,
  profile,
  checkAuth,
  isAdmin,
  handleGoogleLogin,
} = require("../controllers/authController");
const { createCampaign } = require("../controllers/campaignController");

// middleware
router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.get("/", test);
router.post("/register", handleRegister);
router.post("/login", handleLogin);
router.get("/logout", handleLogout);
router.get("/profile", checkAuth, profile);
router.get("/dashboard", checkAuth, profile, (req, res) => {
  res.json({ message: "User exists" });
});

router.post("/googlelogin", handleGoogleLogin);

// campain routing starts here
router.post("/createCampaign", checkAuth, createCampaign);

module.exports = router;
