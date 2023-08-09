import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  payment: [],
  error: "",
};

const fetchPayment = createAsyncThunk("payment/fetchPayment", () => {
  return axios.get("").then((response) => response.data);
});

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPayment.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchPayment.fulfilled, (state, action) => {
      state.loading = false;
      state.payment = action.payload;
      state.error = "";
    });
    builder.addCase(fetchPayment.rejected, (state, action) => {
      state.loading = false;
      state.payment = [];
      state.error = action.error.message;
    });
  },
});

export { fetchPayment };
export const { addPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
