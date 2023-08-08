
import {} from "react";
import "./App.css";
import { createTheme, ThemeProvider } from "@mui/material";
import Sidenavigation from "./components/Sidenavigation";
// import Topbar from "./components/Topbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from "react-router-dom";


function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#00ff00",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Sidenavigation />
        {/*<Topbar />*/}
        <Outlet />
      </div>
    </ThemeProvider>
    <div className="app">
      <Sidenavigation />
      
      {/* <TopBar/> */}
      {/* <Outlet /> */}
    </div>
  );

}

export default App;
