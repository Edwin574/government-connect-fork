import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incidence: [],
};

const incidenceSlice = createSlice({
  name: "incidence",
  initialState,
  reducers: {
    addIncidence: (state, action) => {
      return {
        ...state,
        incidence: [...state.incidence, action.payload],
      };
    },
  },
});

export const { addIncidence } = incidenceSlice.actions;
export default incidenceSlice.reducer;
