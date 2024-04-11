import { createSlice } from "@reduxjs/toolkit";

export const category = createSlice({
  name: "category",
  initialState: {
    data: [
      {
        id: "1",
        name: "Health",
      },
      {
        id: "2",
        name: "Education",
      },
      {
        id: "3",
        name: "Environment",
      },
      {
        id: "4",
        name: "Emergency",
      },
    ],
  },
  reducers: {},
});

export default category.reducer