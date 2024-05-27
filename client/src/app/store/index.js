import { configureStore } from "@reduxjs/toolkit";
import campaignReducer from "../feature/campaignSlice";
import storyReducer from "../feature/storySlice";
import categoryReduser from "../feature/categorySlice";
import userSlice from "../feature/userSlice";
import donationReducer from "../feature/donationSlice";
import storySlice from "../feature/storySlice";
import bankSlice from "../feature/bankSlice";
import payoutSlice from "../feature/payoutSlice";
import responsiveSlice from "../feature/responsiveSlice";

const store = configureStore({
  reducer: {
    campaign: campaignReducer,
    story: storySlice,
    category: categoryReduser,
    user: userSlice,
    donation: donationReducer,
    bank: bankSlice,
    payout: payoutSlice,
    responsive: responsiveSlice
  },
});

export default store;
