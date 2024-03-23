const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  test,
  handleRegister,
  handleLogin,
  handleLogout,
  checkAuth,
  isAdmin,
  handleGoogleLogin,
  fetchUser,
} = require("../controllers/authController");
const { createCampaign } = require("../controllers/campaignController");
const {
  addCategory,
  getCategory,
} = require("../controllers/categoryController");
// const { addUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/userController');

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
