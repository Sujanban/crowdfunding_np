const Category = require("../models/category.model");
const mongoose = require("mongoose");

// ADDING CATEGORY
const addCategory = async (req, res) => {
  try {
    const category = req.body.category;
    if (!category) {
      return res.json({ error: "Category cannot be Empty!" });
    }

    const categoryExists = await Category.findOne({ category });
    if (categoryExists) {
      return res.json({ error: "Category already exists" });
    }
    const newCategory = new Category({
      category,
    });
    await newCategory.save();
    return res.json({ message: "Category added successfully" });
  } catch (err) {
    res.json({ error: err.message });
  }
};

// RETRIVING CATEGORY
const getCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (!categories) return res.json({ error: "Categories not found" });
    res.json(categories);
  } catch (err) {
    res.json({ error: err.message });
  }
};

// retriving individual category by id
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findById(id);
    if (!category) return res.json({ error: "Category not found" });
    res.json(category);
  } catch (err) {
    res.json({ error: err.message });
  }
};

// EDITING CATEGORY
const editCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { category } = req.body;
    if (!category) return res.json({ error: "Category is required" });
    const existCat = await Category.findOne({ category });
    if (existCat) return res.json({ error: "Category already exists" });
    const updated = await Category.findByIdAndUpdate(
      id,
      { category },
      { new: true }
    );
    if (!updated) return res.json({ error: "Category not found" });

    if (updated) {
      res.json({ message: "Category updated successfully" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
};

// DELETING CATEGORY
const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const deleted = await Category.findByIdAndDelete(id);
  if (!deleted) return res.json({ error: "Category not found" });
  res.json({ message: "Category deleted successfully" });
};

module.exports = {
  addCategory,
  getCategory,
  getCategoryById,
  editCategory,
  deleteCategory,
};
