import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  emergency: [],
  error: "",
};

const fetchEmergency = createAsyncThunk(
  "emergency/fetchEmergency",
  async () => {
    const response = await axios.get(
      "http://gvmt.oderowrites.com/Api.php/emergency/list"
    );
    console.log(response.data.users);
    return response.data.users;
  }
);

const emergencySlice = createSlice({
  name: "emergency",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEmergency.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEmergency.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        emergency: [...state.emergency, action.payload],
        error: "",
      };
      //state.loading = false;
      //state.emergency = action.payload;
      //state.error = "";
    });
    builder.addCase(fetchEmergency.rejected, (state, action) => {
      state.loading = false;
      state.emergency = [];
      state.error = action.error.message;
    });
  },
});

export { fetchEmergency };
//export const { addEmergency } = emergencySlice.actions;
export default emergencySlice.reducer;
