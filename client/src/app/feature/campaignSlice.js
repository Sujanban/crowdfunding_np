import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-hot-toast";

export const fetchCampaign = createAsyncThunk("fetchAllCampaign", async () => {
  try {
    const res = await axios.get("/api/campaign/getCampaigns");
    return res.data;
  } catch (error) {
    console.log("Server Error while fetching API " + error);
  }
});

export const fetchSingleCampaign = createAsyncThunk(
  "fetchSingleCampaign",
  async (id) => {
    try {
      const res = await axios.get("/api/campaign/getCampaign/" + id);
      return res.data;
    } catch (error) {
      console.log("Server Error while fetching API " + error);
    }
  }
);

export const postCamaign = createAsyncThunk("postCampaign", async (data) => {
  try {
    const res = await axios.post("/api/campaign/createCampaign", data);
    if (res.data.message) {
      toast.success(res.data.message);
    }
    if (res.data.error) {
      toast.error(res.data.error);
    }
  } catch (error) {
    console.log("Server Error while fetching API " + error);
  }
});

export const updateCampaign = createAsyncThunk(
  "updateCampaign",
  async (data) => {
    try {
      console.log(data);
      const res = await axios.put(
        `/api/campaign/updateCampaign/${data._id}`,
        data
      );
      if (res.data.message) {
        toast.success(res.data.message);
      }
      if (res.data.error) {
        toast.error(res.data.error);
      }
    } catch (error) {
      console.log("Server Error while fetching API " + error);
    }
  }
);

export const deleteCampaign = createAsyncThunk("deleteCampaign", async (id) => {
  try {
    const res = await axios.delete("/api/campaign/deleteCampaign/" + id);
    if (res.data.message) {
      toast.success(res.data.message);
    }
    if (res.data.error) {
      toast.error(res.data.error);
    }
  } catch (error) {
    console.log("Server Error while fetching API " + error);
  }
});

// campaign updaing story
export const updateCampaignStory = createAsyncThunk(
  "updateCampaignStory",
  async (data) => {
    try {
      const res = await axios.post(`/api/story/updateStory/${data.campaignId}`, data);
      console.log(res)
      if (res.data.message) {
        toast.success(res.data.message);
      }
      if (res.data.error) {
        toast.error(res.data.error);
      }
    } catch (error) {
      console.log("Server Error while fetching API " + error);
    }
  }
);

export const campaign = createSlice({
  name: "campaigns",
  initialState: {
    data: [
      {
        _id: "66003b806fb120b540a1fc97",
        campaignOwner: "Rabin Singh Local",
        campaignTitle: "Treatment of the Disease",
        campaignDescription:
          "Fund required for treating cancer emergency Fund required for treating cancer emergency Fund required for treating cancer emergency Fund required for treating cancer emergency Fund required for treating cancer emergency Fund required for treating cancer emergency Fund required for treating cancer emergency Fund required for treating cancer emergency Fund required for treating cancer emergency Fund required for treating cancer emergency Fund required for treating cancer emergency Fund required for treating cancer emergency Fund required for treating cancer emergency Fund required for treating cancer emergency ",
        location: "Itahari",
        thumbnail:
          "https://png.pngtree.com/png-vector/20240309/ourlarge/pngtree-homeless-and-poor-man-png-image_11898872.png",
        videoUrl: "https://www.youtube.com/watch?v=pIzrkLKbszU",
        goalAmount: "10000",
        category: "Health",
      },
    ],
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
      })
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
      });
  },
});

export const getCampaigns = (state) => state.campaign.data;

export default campaign.reducer;
