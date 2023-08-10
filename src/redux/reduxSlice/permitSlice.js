import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  permit: [],
  error: "",
};

const fetchPermit = createAsyncThunk("permit/fetchPermit", () => {
  return axios.get("").then((response) => response.data);
});

const permitSlice = createSlice({
  name: "permit",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPermit.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPermit.fulfilled, (state, action) => {
      state.loading = false;
      state.permit = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPermit.rejected, (state, action) => {
      state.loading = false;
      state.permit = [];
      state.error = action.error.message;
    });
  },
});

export { fetchPermit };
export const { addPermit } = permitSlice.actions;
export default permitSlice.reducer;
