import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const fetchCampaign = createAsyncThunk(
  "fetchAllCampaign",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/campaign/getCampaigns");
      return res.data;
    } catch (error) {
      console.error("Error fetching campaigns:", error);
      const errorMessage =
        error.response?.data?.error || "Failed to fetch campaigns";
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchSingleCampaign = createAsyncThunk(
  "fetchSingleCampaign",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/campaign/getCampaign/${id}`);
      return res.data;
    } catch (error) {
      console.error("Error fetching single campaign:", error);
      const errorMessage =
        error.response?.data?.error || "Failed to fetch campaign";
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchCampaignsByUserID = createAsyncThunk(
  "fetchCampaignsByUserID",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `/api/campaign/getCampaignsByUserID/${userId}`
      );
      return res.data;
    } catch (error) {
      console.error("Error fetching campaigns by user ID:", error);
      const errorMessage =
        error.response?.data?.error || "Failed to fetch campaigns by user ID";
        toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const postCampaign = createAsyncThunk(
  "postCampaign",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/campaign/createCampaign", data);
      if (res.data.message) {
        toast.success(res.data.message);
      }
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to create campaign";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const updateCampaign = createAsyncThunk(
  "updateCampaign",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.put(
        `/api/campaign/updateCampaign/${data._id}`,
        data
      );
      if (res.data.message) {
        toast.success(res.data.message);
      }

      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to update campaign";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const deleteCampaign = createAsyncThunk(
  "deleteCampaign",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/api/campaign/deleteCampaign/${id}`);

      if (res.data.message) {
        toast.success(res.data.message);
      }
      return res.data;
    } catch (error) {
      console.error("Error deleting campaign:", error);
      const errorMessage = error.response?.data?.error || "Failed to delete campaign";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

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
    // getting all campaigns
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
      })

      // getting a single campaign
      .addCase(fetchSingleCampaign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSingleCampaign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchSingleCampaign.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      // getting campaigns by user id
      .addCase(fetchCampaignsByUserID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCampaignsByUserID.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchCampaignsByUserID.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      // creating campaign
      .addCase(postCampaign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postCampaign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload.campaign);
      })
      .addCase(postCampaign.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      // updating campaign
      .addCase(updateCampaign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCampaign.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedCampaign = action.payload.campaign;
        const index = state.data.findIndex(
          (c) => c._id === updatedCampaign._id
        );
        if (index !== -1) {
          state.data[index] = updatedCampaign;
        }
      })
      .addCase(updateCampaign.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      // delete
      .addCase(deleteCampaign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCampaign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((c) => c._id !== action.payload.campaign._id);
      })
      .addCase(deleteCampaign.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default campaign.reducer;
