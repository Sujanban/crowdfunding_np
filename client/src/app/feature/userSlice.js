import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axios from "axios";


// fetching user from local storage
const loadUserFromLocalStorage = () => {
  const userJson = localStorage.getItem("user");
  return userJson ? JSON.parse(userJson) : null;
};

// login function
export const loginUser = createAsyncThunk("loginUser", async (formData) => {
  try {
    const res = await axios.post("/api/auth/login", formData);
    if (res.data.error) {
      toast.error(res.data.error);
    }
    if (res.data) {
      toast.success("Login Successful");
      const user = res.data;
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    }
  } catch (error) {
    console.log("Server Error while fetching API " + error);
  }
});

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
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
  },
});

export const getUser = (state) => state.user.data;
export default user.reducer;
