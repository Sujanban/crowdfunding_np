import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk("fetchAllCategory", async () => {
  try {
    const res = await axios.get("/api/category/getCategory");
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
      }
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
      });
  },
});

export const getCategories = (state) => state.category.data;
export default category.reducer;
