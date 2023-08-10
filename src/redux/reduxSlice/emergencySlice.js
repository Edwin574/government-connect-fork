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
    //console.log(response.data.users);
    let data = response.data.users;
    //if (data.type === "1") {
    //  data.type = "Ambulance";
    //} else if (data.type === "2") {
    //  data.type = "Fire Fighter";
    //} else if (data.type === "3") {
    //  data.type = "Police Officer";
    //} else {
    //  data.type = "Other";
    //}
    console.log(data);
    return data[0];
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
