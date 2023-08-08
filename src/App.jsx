import {} from "react";
import "./App.css";
import Sidenavigation from "./components/Sidenavigation";
// import TopBar from "./components/topbar";
// import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Sidenavigation />
      {/* <TopBar/> */}
      {/* <Outlet /> */}
    </div>
  );
}

export default App;
