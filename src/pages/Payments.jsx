import '../styles/pages/dashboard.css'
import ShowCards from '../components/cards'
import PaidIcon from '@mui/icons-material/Paid';
import '../styles/pages/dashboard.css'
import Table from '../components/table';
import RevenueChart from '../charts/RevenueChart';
import { PaymentData } from "../data/payment";
import { columns } from "../data/payment";

const Payments = () => {
  return (
    <div>
      <div className="mainCards">
      <ShowCards icon={<PaidIcon/> }name="Payments" numbers="3000"/>
      <ShowCards icon={<PaidIcon/> }name="Confirmed Payments" numbers="3000"/>
      <ShowCards icon={<PaidIcon/> }name="Pending Payments" numbers="3000"/>
      </div>

      <div>
        <Table cols={columns} data={PaymentData}/>
      </div>

      <div className="chart">
        <RevenueChart/>
      </div>
    </div>
  )
}

export default Payments