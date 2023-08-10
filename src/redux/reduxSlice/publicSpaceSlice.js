import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  publicSpace: [],
  error: "",
};

const fetchPublicSpace = createAsyncThunk(
  "publicSpace/fetchPublicSpace",
  () => {
    return axios.get("").then((response) => response.data);
  }
);

const publicSpaceSlice = createSlice({
  name: "publicSpace",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPublicSpace.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPublicSpace.fulfilled, (state, action) => {
      state.loading = false;
      state.publicSpace = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPublicSpace.rejected, (state, action) => {
      state.loading = false;
      state.publicSpace = [];
      state.error = action.error.message;
    });
  },
});

export { fetchPublicSpace };
export const { addPublicSpace } = publicSpaceSlice.actions;
export default publicSpaceSlice.reducer;
