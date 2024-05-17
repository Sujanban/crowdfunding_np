import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const getRequests = createAsyncThunk(
  "getRequests",
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

export const getRequestsByUser = createAsyncThunk(
  "getRequestsByUser",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/bank/getPayoutRequestByUser");
      return res.data;
    } catch (err) {
      const errorMessage = err.response?.data?.error || err?.data?.error;
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const requestPayout = createAsyncThunk(
  "requestPayout",
  async (amount, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/bank/requestPayout", { amount });
      if (res.data.message) {
        toast.success(res.data.message);
      }
      if (res.data.error) {
        toast.error(res.data.error);
      }
      return res.data;
    } catch (err) {
      console.log(err)
      const errorMessage =
        err.response?.data?.error || err?.data?.error ;
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const handlePayout = createAsyncThunk(
  "handlePayout",
  async ({ id, status }, { rejectWithValue }) => {
    console.log(id, status);
    try {
      const res = await axios.post("/api/bank/hanldePayoutStatus/" + id, {
        status,
      });
      if (res.data.message) {
        toast.success(res.data.message);
      }
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Failed to handle payout";
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
    builder.addCase(getRequests.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRequests.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getRequests.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    });


    builder.addCase(getRequestsByUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getRequestsByUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getRequestsByUser.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    });


    builder.addCase(handlePayout.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(handlePayout.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(handlePayout.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
  },
});

export default payoutSlice.reducer;
