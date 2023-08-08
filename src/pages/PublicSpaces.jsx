import '../styles/pages/dashboard.css'
import ShowCards from '../components/cards'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import Table from '../components/table';
import RevenueChart from '../charts/RevenueChart';
import { ParkData } from "../data/park";
import { columns } from "../data/park";

const PublicSpaces = () => {
  return (
    <div>
      <div className="mainCards">
      <ShowCards icon={<LocalHospitalIcon/> }name="Emergency Services" numbers="3000"/>
      <ShowCards icon={<LocalParkingIcon/> }name="Emergency Services" numbers="3000"/>
      <ShowCards icon={<AddBusinessTwoToneIcon/> }name="Emergency Services" numbers="3000"/>
      </div>

      <div>
        <Table cols={columns} data={ParkData}/>
      </div>

      <div className="chart">
        <RevenueChart/>
      </div>
    </div>
  )
}

export default PublicSpaces