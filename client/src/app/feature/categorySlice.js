import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk("fetchCategory", async () => {
  try {
    const res = await axios.get("/api/category/getCategory");
    return res.data;
  } catch (error) {
    console.log("Server Error " + error);
  }
});

export const category = createSlice({
  name: "category",
  initialState: {
    data: [
      {
        id: "1",
        name: "Health",
      },
      {
        id: "2",
        name: "Education",
      },
      {
        id: "3",
        name: "Environment",
      },
      {
        id: "4",
        name: "Emergency",
      },
    ],
    isLoading: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
    builder.addCase(fetchCategory.rejected, (state, action)=> {
      state.errorMessage = action.error;
    })
  },
});

export default category.reducer;