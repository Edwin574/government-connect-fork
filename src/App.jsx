
import { useState } from "react";
import "./App.css";

import Sidenavigation from "./components/Sidenavigation";
import TopBar from "./components/topbar";
import ContentContainer from "./pages/ContentContainer";
import { Outlet } from "react-router-dom";
import Login from "./pages/Login";



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleButtonClick = () =>{
    setIsLoggedIn(true)
  }
  const handleLogout = () =>{
    setIsLoggedIn(false)
  }
  return (
    <>
      <div className="app">
        {
          isLoggedIn? 
          <div>
            <Sidenavigation logout={handleLogout}/>
            <TopBar/>
            <ContentContainer/>
          </div>
        : 
        <Login clickButton={handleButtonClick}/>

        }
        
        
        {/* <Dashboard/> */}
        <Outlet />
      </div>
    </>
    
  );

}

export default App;
