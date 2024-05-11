import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";

// get story
export const getStories = createAsyncThunk(
  "getStories",
  async (campaignId, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/story/getStory/${campaignId}`);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to fetch story";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// add story
export const addStory = createAsyncThunk(
  "addStory",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `/api/story/addStory/${data.campaignId}`,
        data
      );
      if (res.data.message) {
        toast.success(res.data.message);
      }
      return res.data;
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Failed to add story";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// delete story
export const deleteStory = createAsyncThunk(
  "deleteStory",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/api/story/deleteStory/${id}`);
      if (res.data.message) {
        toast.success(res.data.message);
      }
      return res.data;
    } catch (error) {
      const errorMessage = error.response?.data?.error || "Failed to delete story";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
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
      .addCase(getStories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getStories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getStories.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(addStory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addStory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = null;
        state.data.push(action.payload.story);
      })
      .addCase(addStory.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(deleteStory.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteStory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.errorMessage = null;
        state.data = state.data.filter((story) => story._id !== action.payload.story._id);
      })
      .addCase(deleteStory.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default storySlice.reducer;
