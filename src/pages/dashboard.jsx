import {} from "react";
import ShowCards from "../components/cards";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import SummarizeIcon from '@mui/icons-material/Summarize';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import PaidIcon from '@mui/icons-material/Paid';
import '../styles/pages/dashboard.css'
import RevenueChart from "../charts/RevenueChart";


const Dashboard = () => {
  return (
    <div className="dashContainer">
      {/* cards */}
      <div className="mainCards">
      <ShowCards icon={<LocalHospitalIcon/> } name="Emergency Services" numbers="3000" bg='normal' percent={100}/>
      <ShowCards icon={<LocalParkingIcon/> } name="Parking services" numbers="2000" bg='light' percent={100}/>
      <ShowCards icon={<AddBusinessTwoToneIcon/> } name="Business Parking" numbers="300" bg='normal' percent={100}/>
      <ShowCards icon={<SummarizeIcon/> } name="Reported Incidences" numbers="400" bg='light' percent={100}/>
      <ShowCards icon={<OtherHousesIcon/> } name="Available Public Spaces" numbers="500" bg='normal' percent={100}/>
      <ShowCards icon={<PaidIcon/> } name="Payments Made" numbers="1000" bg='light' percent={100}/>
      </div>

      {/* chart */}
      <div className="chart">
        <RevenueChart/>
      </div>

      {/* chart 2 */}
      <div className="chart">
        <RevenueChart/>
      </div>
    </div>
  );
};

export default Dashboard;
