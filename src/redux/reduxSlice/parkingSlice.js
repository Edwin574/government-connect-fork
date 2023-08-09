import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  parking: [],
};

const parkingSlice = createSlice({
  name: "parking",
  initialState,
  reducers: {
    addParking: (state, action) => {
      return {
        ...state,
        parking: [...state.parking, action.payload],
      };
    },
  },
});

export const { addParking } = parkingSlice.actions;
export default parkingSlice.reducer;
