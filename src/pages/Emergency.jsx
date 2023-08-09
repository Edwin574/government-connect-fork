import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import Table from "../components/table";
import Barchart from "../charts/Barchart";
import { EmergencyData } from "../data/emergency";
import { columns } from "../data/emergency";
import { useDispatch, useSelector } from "react-redux";

const Emergency = () => {
  const emergency = useSelector((state) => state.emergency.emergency);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mainCards">
        <ShowCards
          icon={<LocalHospitalIcon />}
          name="Emergency Services"
          numbers="300"
        />
        <ShowCards
          icon={<LocalParkingIcon />}
          name="Solved Emergencies"
          numbers="200"
        />
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="Pending Emergency"
          numbers="20"
        />
      </div>

      <div>
        <Table cols={columns} data={EmergencyData} />
      </div>

      <div className="chart">
        <Barchart />
      </div>
    </div>
  );
};

export default Emergency;
