const express = require("express");
const router = express.Router();
const cors = require("cors");
const { fetchUserProfile } = require("../controllers/authController");

const checkAuth = require("../middlewares/userAuth");
const { fetchUsers, deleteUser } = require("../controllers/userController");

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.get("/profile", checkAuth, fetchUserProfile);
router.get("/users", checkAuth, fetchUsers);
router.delete("/deleteUser/:userId",checkAuth, deleteUser)

module.exports = router;
