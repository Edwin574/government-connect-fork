import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emergency: [],
};

const emergencySlice = createSlice({
  name: "emergency",
  initialState,
  reducers: {
    addEmergency: (state, action) => {
      return {
        ...state,
        emergency: [...state.emergency, action.payload],
      };
    },
  },
});

export const { addEmergency } = emergencySlice.actions;
export default emergencySlice.reducer;
