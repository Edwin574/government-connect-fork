import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import Table from "../components/table";
import RevenueChart from "../charts/RevenueChart";
import { ParkData } from "../data/park";
import { columns } from "../data/park";

import "../styles/components/tables.css";

const Parking = () => {
  return (
    <div>
      <div className="mainCards">
        <ShowCards
          icon={<LocalHospitalIcon />}
          name="Parking Spaces"
          numbers="300"
          bg="light"
          percent={100}
        />
        <ShowCards
          icon={<LocalParkingIcon />}
          name="Spaces Available"
          numbers="150"
          bg="normal"
          percent={90}
        />
      </div>

      <div className="table-container">
        <Table cols={columns} data={ParkData} />
      </div>

      <div className="chart">
        <RevenueChart />
      </div>
    </div>
  );
};

export default Parking;
