import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const fetchCategory = createAsyncThunk(
  "fetchAllCategory",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/category/getCategory");
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to fetch categories";
      console.error("Error fetching categories:", error);
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const getCategoryById = createAsyncThunk(
  "getCategoryById",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/category/getCategoryById/${id}`);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to fetch category by ID";
      console.error("Error fetching category by ID:", error);
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const addCategory = createAsyncThunk(
  "addCategory",
  async (category, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/category/createCategory", {
        category,
      });
      if (res.data.message) {
        toast.success(res.data.message);
      }
      return res.data;
    } catch (error) {
      console.error("Error adding category:", error);
      const errorMessage =
        error.response?.data?.error || "Failed to add category";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "updateCategory",
  async (category, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `/api/category/editCategory/${category._id}`,
        category
      );
      if (res.data.message) {
        toast.success(res.data.message);
      }
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to update category";
      console.error("Error updating category:", error);
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const deleteCategory = createAsyncThunk(
  "deleteCategory",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/api/category/deleteCategory/${id}`);
      if (res.data.message) {
        toast.success(res.data.message); 
      }
      return res.data; 
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Failed to delete category";
      console.error("Error deleting category:", error);
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const category = createSlice({
  name: "category",
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getting all category
      .addCase(fetchCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      // getting a single category
      .addCase(getCategoryById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(getCategoryById.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      // adding category
      .addCase(addCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload.category);
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      // updating category
      .addCase(updateCategory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedCategory = action.payload;
        const index = state.data.findIndex(
          (cat) => cat._id === updatedCategory._id
        );
        if (index !== -1) {
          state.data[index] = updatedCategory;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      // deleting category
      .addCase(deleteCategory.pending, (state) => {
        state.isLoading = true; // Indicate loading
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((cat) => cat._id !== action.payload.category._id);
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const getCategories = (state) => state.category.data;
export default category.reducer;
