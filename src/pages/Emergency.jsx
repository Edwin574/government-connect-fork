import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import Table from "../components/table";
import Linechart from "../charts/Linechart";
import { EmergencyData } from "../data/emergency";
import { columns } from "../data/emergency";

import "../styles/components/tables.css";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchEmergency } from "../redux/reduxSlice/emergencySlice";

const Emergency = () => {
  const emergency = useSelector((state) => state.emergency.emergency);
  const dispatch = useDispatch();
  //const [data, setData] = useState();

  useEffect(() => {
    dispatch(fetchEmergency());
    //setData(emergency);
    //console.log(emergency);
  }, [dispatch]);
  console.log(emergency);

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
        <Table cols={columns} data={emergency} />
      </div>

      <div className="chart">
        <Linechart />
      </div>
    </div>
  );
};

export default Emergency;
