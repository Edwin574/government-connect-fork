import { configureStore } from "@reduxjs/toolkit";
import emergencyReducer from "./reduxSlice/emergencySlice";
import incidenceReducer from "./reduxSlice/incidenceSlice";
import parkingReducer from "./reduxSlice/parkingSlice";
import paymentReducer from "./reduxSlice/paymentSlice";
import permitReducer from "./reduxSlice/permitSlice";
import publicSpaceReducer from "./reduxSlice/publicSpaceSlice";

const store = configureStore({
  reducer: {
    emergency: emergencyReducer,
    incidence: incidenceReducer,
    parking: parkingReducer,
    payment: paymentReducer,
    permit: permitReducer,
    publicSpace: publicSpaceReducer,
  },
  //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
