const Category = require("../models/category.model");

// ADDING CATEGORY
const addCategory = async (req, res) => {
  try {
    const category = req.body.category;

    if (!category) {
      return res.status(400).json({ error: "Category cannot be empty" });
    }

    const categoryExists = await Category.findOne({ category });
    if (categoryExists) {
      return res.status(409).json({ error: "Category already exists" });
    }

    const newCategory = new Category({ category });
    await newCategory.save();

    return res
      .status(201)
      .json({ message: "Category added successfully", category: newCategory});
  } catch (err) {
    console.error("Error adding category:", err);

    return res.status(500).json({ error: "Internal server error" });
  }
};

// RETRIVING CATEGORY
const getCategory = async (req, res) => {
  try {
    const categories = await Category.find({});

    if (!categories || categories.length === 0) {
      return res.status(404).json({ error: "No categories found" });
    }

    return res.status(200).json(categories);
  } catch (err) {
    console.error("Error fetching categories:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// retriving individual category by id
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Category ID is required" });
    }

    const category = await Category.findById(id);

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    return res.status(200).json(category);
  } catch (err) {
    console.error("Error fetching category by ID:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// EDITING CATEGORY
const editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;

    if (!category) {
      return res.status(400).json({ error: "Category is required" });
    }

    const existCat = await Category.findOne({ category });
    if (existCat) {
      return res.status(409).json({ error: "Category already exists" });
    }

    const updated = await Category.findByIdAndUpdate(
      id,
      { category },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Category not found" });
    }

    return res.status(200).json({ message: "Category updated successfully" });
  } catch (err) {
    console.error("Error updating category:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// DELETING CATEGORY
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ error: "Category ID is required" });
    }

    const deleted = await Category.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ error: "Category not found" });
    }

    return res.status(200).json({ message: "Category deleted successfully", category: deleted });
  } catch (error) {
    console.error("Error deleting category:", error);

    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  addCategory,
  getCategory,
  getCategoryById,
  editCategory,
  deleteCategory,
};
