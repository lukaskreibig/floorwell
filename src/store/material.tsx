import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  materialSlice: [],
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    newMaterial: (state: any, action) => {
      state.materialSlice = [action.payload];
    },
  },
});

export const { newMaterial } = apiSlice.actions;

export default apiSlice.reducer;
