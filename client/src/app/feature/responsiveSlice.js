import { createSlice } from "@reduxjs/toolkit";

const responsiveSlice = createSlice({
    name: "responsive",
    initialState: {
        navbarVisible: true,
    },
    reducers: {
        handleNavbarVisibility: (state, action) => {
            state.navbarVisible = action.payload;
        },
    },
});

export const { handleNavbarVisibility } = responsiveSlice.actions;

export default responsiveSlice.reducer;