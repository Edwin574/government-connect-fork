import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  payment: [],
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    addPayment: (state, action) => {
      return {
        ...state,
        payment: [...state.payment, action.payload],
      };
    },
  },
});

export const { addPayment } = paymentSlice.actions;
export default paymentSlice.reducer;
