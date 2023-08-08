<<<<<<< HEAD
import {} from 'react'
import './App.css'
import Sidenavigation from './components/Sidenavigation'
import Login from './pages/Login'

function App() {
  return (
    <>
    <Login/>
    
    </>
  )
=======
import {} from "react";
import "./App.css";
import Sidenavigation from "./components/Sidenavigation";
import Topbar from "./components/Topbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Sidenavigation />
      {/*<Topbar />*/}
      <Outlet />
    </div>
  );
>>>>>>> 0138bd27c9d7b36f82e6a4c5acdedf7830fd73ea
}

export default App;
