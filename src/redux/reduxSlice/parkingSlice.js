import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  parking: [],
  error: "",
};

const fetchParking = createAsyncThunk("parking/fetchParking", () => {
  return axios.get("").then((response) => response.data);
});

const parkingSlice = createSlice({
  name: "parking",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchParking.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchParking.fulfilled, (state, action) => {
      state.loading = false;
      state.parking = action.payload;
      state.error = "";
    });
    builder.addCase(fetchParking.rejected, (state, action) => {
      state.loading = false;
      state.parking = [];
      state.error = action.error.message;
    });
  },
});

export { fetchParking };
export const { addParking } = parkingSlice.actions;
export default parkingSlice.reducer;
