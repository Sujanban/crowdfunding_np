import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";


// fetchDonations
export const getDonations = createAsyncThunk(
  "getDonations",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/donation/getDonations`);
      return res.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "Failed to fetch donations";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);


// create donation
export const createDonation = createAsyncThunk(
  "createDonation",
  async ( {id, userId, amount }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`/api/donation/createDonation/${id}`, {
        userId,
        amount,
        campaignId: id,
      });
      if (res.data.url) {
        window.location.href = res.data.url;
      }
      if (res.data.error) {
        toast.error(res.data.error);
      }
      return res.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "Failed to create donation";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// get donation by campaign
export const fetchDonationByCampaign = createAsyncThunk(
  "fetchDonationByCampaign",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(
        `/api/donation/fetchDonationByCampaign/${id}`
      );
      return res.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "Failed to fetch donations";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// get donation by user
export const fetchDonationByUser = createAsyncThunk(
  "fetchDonationByUser",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get(`/api/donation/fetchDonationByUser/${id}`);
      return res.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || "Failed to fetch donations";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const donation = createSlice({
  name: "donation",
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // create donation
      .addCase(createDonation.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(createDonation.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createDonation.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      // get donations
      .addCase(getDonations.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getDonations.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getDonations.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      // get donation by campaign
      .addCase(fetchDonationByCampaign.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(fetchDonationByCampaign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDonationByCampaign.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      // get donation by user
      .addCase(fetchDonationByUser.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(fetchDonationByUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDonationByUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default donation.reducer;
