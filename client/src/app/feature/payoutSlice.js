import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPayoutRequests = createAsyncThunk(
  "getPayoutRequests",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/bank/getPayoutRequests");
      return res.data;
    } catch (err) {
      const errorMessage = err.response?.data?.error || err?.data?.error;
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

const payoutSlice = createSlice({
  name: "payout",
  initialState: {
    data: null,
    isLoading: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPayoutRequests.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getPayoutRequests.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getPayoutRequests.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
  },
});

export default payoutSlice.reducer;
