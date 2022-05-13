import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  classAPI: [],
};

const classSlice = createSlice({
  name: "classAPI",
  initialState,
  reducers: {
    newClass: (state: any, action) => {
      state.classAPI = [action.payload];
    },
  },
});

export const { newClass } = classSlice.actions;

export default classSlice.reducer;
