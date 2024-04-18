const express = require("express");
const router = express.Router();
const cors = require("cors");
const { updateStory, getStory } = require("../controllers/storyControlller");

const checkAuth = require("../middlewares/userAuth");

router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

router.get("/getStory/:id", getStory);
router.post("/updateStory/:id", checkAuth, updateStory);

module.exports = router;
