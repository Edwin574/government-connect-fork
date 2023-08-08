
import {} from "react";
import "./App.css";

import Sidenavigation from "./components/Sidenavigation";
import TopBar from "./components/topbar";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Dashboard from "./pages/dashboard";
import ContentContainer from "./pages/ContentContainer";
import { Outlet } from "react-router-dom";
// import Dashboard from "./pages/dashboard";
// import Emergency from "./pages/Emergency";
// import Login from "./pages/Login";
// import Parking from "./pages/Parking";
// import Payments from "./pages/Payments";
// import Permits from "./pages/Permits";
// import PublicSpaces from "./pages/PublicSpaces";
// import ReportIncidence from "./pages/ReportIncidence";
// import Signup from "./pages/Signup";


function App() {

  return (
    <>
      <div className="app">
        <Sidenavigation/>
        <TopBar/>
        <ContentContainer/>
        
        {/* <Dashboard/> */}
        <Outlet />
      </div>
    </>
    
  );

}

export default App;
