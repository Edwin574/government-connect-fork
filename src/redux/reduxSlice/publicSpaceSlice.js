import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  publicSpace: [],
};

const publicSpaceSlice = createSlice({
  name: "publicSpace",
  initialState,
  reducers: {
    addPublicSpace: (state, action) => {
      return {
        ...state,
        publicSpace: [...state.publicSpace, action.payload],
      };
    },
  },
});

export const { addPublicSpace } = publicSpaceSlice.actions;
export default publicSpaceSlice.reducer;
