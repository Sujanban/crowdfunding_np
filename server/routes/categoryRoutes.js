const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  addCategory,
  getCategory,
  deleteCategory,
  editCategory
} = require("../controllers/categoryController");
const { checkAuth, isAdmin } = require("../controllers/authController");

// middleware
router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// CREATE CATEGORY
router.post("/createCategory", addCategory);

// GET CATEGORY
router.get("/getCategory", getCategory);

// UPDATE CATEGORY
router.put("/editCategory/:id", editCategory);

// DELETE CATEGORY
router.delete("/deleteCategory/:id", deleteCategory);

module.exports = router;
