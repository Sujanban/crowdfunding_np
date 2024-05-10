const express = require("express");
const router = express.Router();
const cors = require("cors");
const { fetchUserProfile } = require("../controllers/authController");
const {checkAuth, isAdmin} = require("../middlewares/userAuth");
const { fetchUsers, deleteUser } = require("../controllers/userController");

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.get("/profile", checkAuth, fetchUserProfile);
router.get("/users", checkAuth,isAdmin, fetchUsers);
router.delete("/deleteUser", checkAuth, isAdmin, deleteUser);
router.delete("/deleteUser/:userId", checkAuth, isAdmin, deleteUser);


module.exports = router;
