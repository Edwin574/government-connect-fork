import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./pages/dashboard.jsx";
import Emergency from "./pages/Emergency.jsx";
import Login from "./pages/Login.jsx";
import Parking from "./pages/Parking.jsx";
import Payments from "./pages/Payments.jsx";
import Permits from "./pages/Permits.jsx";
import PublicSpaces from "./pages/PublicSpaces.jsx";
import ReportIncidence from "./pages/ReportIncidence.jsx";
import Signup from "./pages/Signup.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index path="/" element={<Dashboard />} />
      <Route path="emergency" element={<Emergency />} />
      <Route path="login" element={<Login />} />
      <Route path="parking" element={<Parking />} />
      <Route path="payments" element={<Payments />} />
      <Route path="permits" element={<Permits />} />
      <Route path="public-spaces" element={<PublicSpaces />} />
      <Route path="report-incidence" element={<ReportIncidence />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
