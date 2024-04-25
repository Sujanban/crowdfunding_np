const express = require("express");
const router = express.Router();
const cors = require("cors");
const { fetchUserProfile } = require("../controllers/authController");

const checkAuth = require("../middlewares/userAuth");
const { fetchUsers } = require("../controllers/userController");

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.get("/profile", checkAuth, fetchUserProfile);
router.get("/users", checkAuth, fetchUsers);

module.exports = router;
