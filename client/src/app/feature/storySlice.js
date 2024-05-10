import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";


// fetching story from id
export const getStorys = createAsyncThunk(
  "getStorys",
  async (campaignId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/story/getStory/${campaignId}`);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error || "Failed to fetch stories"); // Ensure error is passed
    }
  }
);
  
// Campaign updating story
export const addStory = createAsyncThunk(
  "addStory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/api/story/addStory/${data.campaignId}`, data);
      toast.success(res.data.message);
      return res.data; // Successful addition
    } catch (error) {
      toast.error(error.response.data.error);
      return rejectWithValue(error.response?.data?.error || "Failed to add story"); // Ensure error is passed
    }
  }
);


export const storySlice = createSlice({
  name: "story",
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getStorys.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStorys.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getStorys.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(addStory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addStory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = null;

      })
      .addCase(addStory.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default storySlice.reducer;