const express = require("express");
const router = express.Router();
const cors = require("cors");
const {
  addCategory,
  getCategory,
  deleteCategory,
  editCategory,
  getCategoryById,
} = require("../controllers/categoryController");
const { checkAuth, isAdmin } = require("../middlewares/userAuth");

// middleware
router.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// CREATE CATEGORY
router.post("/createCategory", checkAuth, isAdmin, addCategory);

// GET CATEGORYs
router.get("/getCategory", getCategory);

// get individual category by id
router.get("/getCategoryById/:id", checkAuth, isAdmin, getCategoryById);

// UPDATE CATEGORY
router.put("/editCategory/:id", checkAuth, isAdmin, editCategory);

// DELETE CATEGORY
router.delete("/deleteCategory/:id", checkAuth, isAdmin, deleteCategory);

module.exports = router;
