import '../styles/pages/dashboard.css'
import ShowCards from '../components/cards'
import AddBusinessTwoToneIcon from '@mui/icons-material/AddBusinessTwoTone';
import Table from '../components/table';
import RevenueChart from '../charts/RevenueChart';
// import { ParkData } from "../data/park";
import { PermitData } from '../data/Permit';
import { columns } from '../data/Permit';
import "../styles/components/tables.css"

const Permits = () => {
  return (
    <div>
      <div className="mainCards">
      <ShowCards icon={<AddBusinessTwoToneIcon/> } name="Permit Requests" numbers="2330" bg='light' percent={100}/>
      <ShowCards icon={<AddBusinessTwoToneIcon/> } name="Granted Permits" numbers="1570" bg='normal' percent={56}/>
      <ShowCards icon={<AddBusinessTwoToneIcon/> } name="Pending Permits" numbers="600" bg='light' percent={44}/>
      </div>

      <div className='table-containter'>
        <Table cols={columns} data={PermitData}/>
      </div>

      <div className="chart">
        <RevenueChart/>
      </div>
    </div>
  );
};

export default Permits;
