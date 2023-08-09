import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  emergency: [],
  error: "",
};

const fetchEmergency = createAsyncThunk("emergency/fetchEmergency", () => {
  return axios
    .get("https://2440-41-84-159-198.ngrok-free.app/emergencies/read")
    .then((response) => response.data);
});

const emergencySlice = createSlice({
  name: "emergency",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEmergency.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEmergency.fulfilled, (state, action) => {
      state.loading = false;
      state.emergency = action.payload;
      state.error = "";
    });
    builder.addCase(fetchEmergency.rejected, (state, action) => {
      state.loading = false;
      state.emergency = [];
      state.error = action.error.message;
    });
  },
});

export { fetchEmergency };
export const { addEmergency } = emergencySlice.actions;
export default emergencySlice.reducer;
