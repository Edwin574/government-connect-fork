import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import Table from "../components/table";
import Barchart from "../charts/Barchart";
import { EmergencyData } from "../data/emergency";
import { columns } from "../data/emergency";
import axios from "axios";
import "../styles/components/tables.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Emergency = () => {
  const emergency = useSelector((state) => state.emergency.emergency);
  const dispatch = useDispatch();
  const [ emdata, setemData ] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://2440-41-84-159-198.ngrok-free.app/emergencies/read")
      .then((res) => {
        console.log(res);
        setemData(res);
      }).catch((error)=>{
        console.log(error)
      });
  },[]);
  // console.log('emergencydata',emdata)
  return (
    <div>
      <div className="mainCards">
        <ShowCards
          icon={<LocalHospitalIcon />}
          name="Emergency Services"
          numbers="300"
          percent={100}
          bg="light"
        />
        <ShowCards
          icon={<LocalParkingIcon />}
          name="Solved Emergencies"
          numbers="200"
          percent={80}
          bg="normal"
        />
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="Pending Emergency"
          numbers="20"
          percent={20}
          bg="light"
        />
      </div>

      <div className="table-containter">
        <Table cols={columns} data={EmergencyData} />
      </div>

      <div className="chart">
        <Barchart />
      </div>
    </div>
  );
};

export default Emergency;
