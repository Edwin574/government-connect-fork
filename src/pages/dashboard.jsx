import React from "react";
import Sidenavigation from "../components/Sidenavigation";
// import Grid from "@mui/system/Unstable_Grid/Grid";
// import {styled} from "@emotion/styled";
// import { Paper } from "@mui/material/Paper";
// import Box from "@mui/material/Box";

const Dashboard = () => {
  return (
    <div className="dashboard container">
    <div className="row">
    <div className="col col-1 fixed">
    <Sidenavigation/>
    </div>
    <div className="col col-11">
    <div className="row shadow p-4 border text-center mt-2" style={{width:'100%'}}> top</div>
    <div className="row shadow my-5 p-4 shadow" style={{}}>cards</div>
    <div className="row shadow my-4 shadow align-self-center mx-5" style={{width:'700px',height:'300px'}}>chart</div>
    <div className="row shadow my-5 shadow mx-5" style={{width:'700px',height:'300px'}}>chart</div>
    </div>
    </div>
    </div>
  );
};

export default Dashboard;
