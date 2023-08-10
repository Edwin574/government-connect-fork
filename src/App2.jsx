import {} from "react";
import "./App.css";
import { NavLink, Outlet } from "react-router-dom";
import { Button, ButtonGroup } from "@mui/material";

function App() {
  return (
    <>
      <ButtonGroup variant="text" aria-label="text button group">
        <NavLink to="/">
          <Button>Dashboard</Button>
        </NavLink>
        <NavLink to="emergency">
          <Button>Emergency</Button>
        </NavLink>
        <NavLink to="login">
          <Button>Login</Button>
        </NavLink>
        <NavLink to="parking">
          <Button>Parking</Button>
        </NavLink>
        <NavLink to="payments">
          <Button>Payments</Button>
        </NavLink>
        <NavLink to="permits">
          <Button>Permits</Button>
        </NavLink>
        <NavLink to="public-spaces">
          <Button>Public Spaces</Button>
        </NavLink>
        <NavLink to="report-incidence">
          <Button>Report Incidence</Button>
        </NavLink>
        <NavLink to="signup">
          <Button>Sign up</Button>
        </NavLink>
      </ButtonGroup>
      <Outlet />
    </>
  );
}

export default App;
