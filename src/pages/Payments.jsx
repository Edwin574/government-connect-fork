import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import PaidIcon from "@mui/icons-material/Paid";
import "../styles/pages/dashboard.css";
import Table from "../components/table";
import Barchart from "../charts/Barchart";
import { PaymentData } from "../data/payment";
import { columns } from "../data/payment";

const Payments = () => {
  return (
    <div>
      <div className="mainCards">
        <ShowCards icon={<PaidIcon />} name="Payments" numbers="3000" />
        <ShowCards
          icon={<PaidIcon />}
          name="Confirmed Payments"
          numbers="3000"
        />
        <ShowCards icon={<PaidIcon />} name="Pending Payments" numbers="3000" />
      </div>

      <div>
        <Table cols={columns} data={PaymentData} />
      </div>

      <div className="chart">
        <Barchart />
      </div>
    </div>
  );
};

export default Payments;
