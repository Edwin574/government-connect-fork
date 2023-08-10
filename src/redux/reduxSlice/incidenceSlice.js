import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  incidence: [],
  error: "",
};

const fetchIncidence = createAsyncThunk("incidence/fetchIncidence", () => {
  return axios.get("").then((response) => response.data);
});

const incidenceSlice = createSlice({
  name: "incidence",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchIncidence.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchIncidence.fulfilled, (state, action) => {
      state.loading = false;
      state.incidence = action.payload;
      state.error = "";
    });
    builder.addCase(fetchIncidence.rejected, (state, action) => {
      state.loading = false;
      state.incidence = [];
      state.error = action.error.message;
    });
  },
});

export { fetchIncidence };
export const { addIncidence } = incidenceSlice.actions;
export default incidenceSlice.reducer;
