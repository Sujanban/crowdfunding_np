import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import { toast } from "react-hot-toast";
import { createAsyncThunk } from "@reduxjs/toolkit";


// fetching story from id
export const fetchStory = createAsyncThunk(
    "fetchStory",
    async (campaignId) => {
      try {
        const res = await axios.get(`/api/story/getStory/${campaignId}`);
        return res.data;
      } catch (error) {
        console.log("Catch Block : Server Error while fetching API " + error);
      }
    }
  );
  
  // campaign updaing story
  export const updateCampaignStory = createAsyncThunk(
    "updateCampaignStory",
    async (data) => {
      try {
        const res = await axios.post(
          `/api/story/updateStory/${data.campaignId}`,
          data
        );
        if (res.data.message) {
          toast.success(res.data.message);
        }
        if (res.data.error) {
          toast.error(res.data.error);
        }
        return res.data;
      } catch (error) {
        console.log("Server Error while fetching API " + error);
      }
    }
  );
export const story = createSlice({
    name: "story",
    initialState: {
        data: [],
        isLoading: false,
        errorMessage: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchStory.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchStory.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchStory.rejected, (state, action) => {
                state.isLoading = false;
                state.errorMessage = action.payload;
            })
    },
})

export default story.reducer