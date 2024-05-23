import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

// create donation
export const addBank = createAsyncThunk(
  "addBank",
  async (stripeAccount, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/bank/addBank", { stripeAccount });
      if(res.data.message){
        toast.success(res.data.message)
      }else{
        toast.error(res.data.error)
      }
      return res.data;
    } catch (err) {
      console.log(err);
      const errorMessage = err.response?.data?.error || "Failed to add Bank";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);


export const getBanks = createAsyncThunk(
  "getBanks",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/bank/getBanks");
      return res.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || err?.res?.data ||"Failed to fetch bank details";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const getBank = createAsyncThunk(
  "getBank",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/bank/getBank");
      return res.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || err?.res?.data ||"Failed to fetch bank details";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// delete bank
export const deleteBank = createAsyncThunk(
  "deleteBank",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(`/api/bank/deleteBank/${id}`);
      if(res.data.message){
        toast.success(res.data.message)
      }
      return res.data;
    } catch (err) {
      const errorMessage =
        err.response?.data?.error || err?.res?.data ||"Failed to delete bank details";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const bank = createSlice({
  name: "bank",
  initialState: {
    data: [],
    isLoading: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder

      // create donation
      .addCase(addBank.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(addBank.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload.bank;
      })
      .addCase(addBank.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(getBanks.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getBanks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getBanks.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(getBank.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(getBank.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(getBank.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(deleteBank.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
      })
      .addCase(deleteBank.fulfilled, (state, action) => {
        state.isLoading = false;

      })
      .addCase(deleteBank.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      
      
      
      ;
  },
});

export default bank.reducer;
