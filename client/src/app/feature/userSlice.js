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
  async () => {
    try {
      const res = await axios.get("/api/user/profile/");
      return res.data;
    } catch (error) {
      console.log("Server Error while fetching API " + error);
    }
  }
);

// login function
export const loginUser = createAsyncThunk("loginUser", async (formData) => {
  try {
    const res = await axios.post("/api/auth/login", formData);
    if (res.data.error) {
      toast.error(res.data.error);
    } else {
      toast.success("Login Successful");
      const user = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    }
    // if (res.data) {
    //   toast.success("Login Successful");
    //   const user = res.data;
    //   localStorage.setItem("user", JSON.stringify(user));
    //   return user;
    // }
  } catch (error) {
    console.log("Server Error while fetching API " + error);
  }
});

// register function
export const registerUser = createAsyncThunk(
  "registerUser",
  async (formData) => {
    try {
      const res = await axios.post("/api/auth/register", formData);
      if (res.data.error) {
        toast.error(res.data.error);
      }
      if (res.data.message) {
        toast.success("Register Successful");
      }
      return res.data;
    } catch (error) {
      console.log("Server Error while fetching API " + error);
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
    data: loadUserFromLocalStorage(),
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
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      })
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.errorMessage = action.payload;
      });
  },
});

export const getUser = (state) => state.user.data;
export default user.reducer;
