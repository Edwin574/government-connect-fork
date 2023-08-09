import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import Table from "../components/table";
import Barchart from "../charts/Barchart";
import { ParkData } from "../data/park";
import { columns } from "../data/park";
import { useSelector } from "react-redux";

const Permits = () => {
  const permit = useSelector((state) => state.permit.permit);

  return (
    <div>
      <div className="mainCards">
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="Permit Requests"
          numbers="2330"
        />
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="Granted Permits"
          numbers="1570"
        />
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="Pending Permits"
          numbers="600"
        />
      </div>

      <div>
        <Table cols={columns} data={ParkData} />
      </div>

      <div className="chart">
        <Barchart />
      </div>
    </div>
  );
};

export default Permits;
