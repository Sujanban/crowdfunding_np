import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

export const createDonation = createAsyncThunk(
  'createDonation',
  async (id, userId, amount) => {
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
    } catch (err) {
      console.log(err);
    }
  }
);
export const fetchDonationByCampaign = createAsyncThunk(
  'fetchDonationByCampaign',
  async (id) => {
    try {
      const res = await axios.get(`/api/donation/fetchDonationByCampaign/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
);

export const fetchDonationByUser = createAsyncThunk(
  'fetchDonationByUser',
  async (id) => {
    try {
      const res = await axios.get(`/api/donation/fetchDonationByUser/${id}`);
      return res.data;
    } catch (err) {
      console.log(err);
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
      .addCase(createDonation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createDonation.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(createDonation.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      .addCase(fetchDonationByCampaign.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDonationByCampaign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDonationByCampaign.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })

      .addCase(fetchDonationByUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDonationByUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDonationByUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;  
      })
  },
});

export default donation.reducer