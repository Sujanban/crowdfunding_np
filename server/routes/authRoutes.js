const express = require("express");
const router = express.Router();
const cors = require("cors");
const {handleRegister,handleLogin,handleLogout,fetchUser,checkAuth,isAdmin,handleGoogleLogin} = require("../controllers/authController");

// middleware
router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// REGISTRATION
router.post("/register", handleRegister);

// LOGIN
router.post("/login", handleLogin);

// LOGOUT
router.get("/logout", handleLogout);

// PROFILE
router.get("/user", fetchUser);

// GOOGLE LOGIN
router.post("/googlelogin", handleGoogleLogin);

module.exports = router;
