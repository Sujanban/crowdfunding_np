import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const fetchCategory = createAsyncThunk("fetchAllCategory", async () => {
  try {
    const res = await axios.get("/api/category/getCategory");
    if (res.data.error) {
      toast.error(res.data.error);
    }
    return res.data;
  } catch (error) {
    console.log("Server Error while fetching API " + error);
  }
});

export const getCategoryById = createAsyncThunk(
  "getCategoryById",
  async (id) => {
    try {
      const res = await axios.get("/api/category/getCategoryById/" + id);
      if (res.data.error) {
        toast.error(res.data.error);
      }
      return res.data;
    } catch (error) {
      console.log("Server Error while fetching API " + error);
    }
  }
);

export const addCategory = createAsyncThunk("addCategory", async (category) => {
  try {
    const res = await axios.post("/api/category/createCategory", { category });
    if (res.data.error) {
      toast.error(res.data.error);
    } else {
      toast.success(res.data.message);
    }
    return res.data;
  } catch (error) {
    console.log("Server Error while fetching API " + error);
  }
});

export const updateCategory = createAsyncThunk(
  "updateCategory",
  async (category) => {
    console.log(category);
    try {
      const res = await axios.put(
        `/api/category/editCategory/${category._id}`,
        category
      );
      if (res.data.error) {
        toast.error(res.data.error);
      } else {
        toast.success(res.data.message);
      }
      return res.data;
    } catch (error) {
      console.log("Server Error while fetching API " + error);
    }
  }
);

export const deleteCategory = createAsyncThunk("deleteCategory", async (id) => {
  try {
    const res = await axios.delete("/api/category/deleteCategory/" + id);
    if (res.data.error) {
      toast.error(res.data.error);
    } else {
      toast.success(res.data.message);
    }
    return res.data;
  } catch (error) {
    console.log("Server Error while fetching API " + error);
  }
});

export const category = createSlice({
  name: "category",
  initialState: {
    data: [
      {
        id: "1",
        category: "Health",
      },
      {
        id: "2",
        category: "Education",
      },
    ],
    isLoading: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
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
      .addCase(getCategoryById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getCategoryById.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const getCategories = (state) => state.category.data;
export default category.reducer;
