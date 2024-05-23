import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axios from "axios";

// fetching user from local storage
const loadUserFromLocalStorage = () => {
  const userJson = localStorage.getItem("user");
  return userJson ? JSON.parse(userJson) : null;
};

// fetch user profile
export const fetchUserProfile = createAsyncThunk(
  "fetchUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get("/api/user/profile/");
      if(res.data.error) return rejectWithValue(res.data.error);
      return res.data;
    } catch (error) {
      toast.error(error);
      return rejectWithValue(error);
    }
  }
);

// login function
export const loginUser = createAsyncThunk(
  "loginUser",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/auth/login", formData);
      if (res.data.message) {
        toast.success(res.data.message);
        const user = res.data.userData;
        localStorage.setItem("user", JSON.stringify(user));
        return user;
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Server Error while fetching API";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// register function
export const registerUser = createAsyncThunk(
  "registerUser",
  async (formData, { rejectWithValue }) => {
    try {
      const res = await axios.post("/api/auth/register", formData);
      if (res.data.message) {
        toast.success(res.data.message);
      }
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "Server Error while fetching API";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// logout function
export const logoutUser = createAsyncThunk("logoutUser", async () => {
  try {
    const res = await axios.get("/api/auth/logout");
    if (res.data.error) {
      toast.error(res.data.error);
    }
    if (res.data) {
      toast.success("Logout Successful");
      localStorage.removeItem("user");
    }
    return res.data;
  } catch (error) {
    console.log("Server Error while fetching API " + error);
  }
});

const user = createSlice({
  name: "user",
  initialState: {
    data: null,
    isAuthenticated: null,
    isLoading: false,
    errorMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.isAuthenticated = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const getUser = (state) => state.user.data;
export default user.reducer;
