import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCampaign = createAsyncThunk("fetchAllCampaign", async () => {
  try {
    const res = await axios.get("/api/campaign/getCampaigns");
    return res.data;
  } catch (error) {
    console.log("Server Error while fetching API " + error);
  }
});

export const campaign = createSlice({
  name: "campaigns",
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampaign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCampaign.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const getCampaigns = (state) => state.campaign.data;

export default campaign.reducer;
