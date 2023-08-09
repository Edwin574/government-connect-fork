import "../styles/components/tables.css";

import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import PaidIcon from "@mui/icons-material/Paid";
import "../styles/pages/dashboard.css";
import Table from "../components/table";
import Linechart from "../charts/Linechart";
import { PaymentData } from "../data/payment";
import { columns } from "../data/payment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPayment } from "../redux/reduxSlice/paymentSlice";

const Payments = () => {
  const payment = useSelector((state) => state.payment.payment);
  const dispatch = useDispatch();

  /*useEffect(() => {
    dispatch(fetchPayment())
  }, [payment])*/

  return (
    <div>
      <div className="mainCards">
        <ShowCards
          icon={<PaidIcon />}
          name="Payments"
          numbers="3000"
          bg="light"
          percent={100}
        />
        <ShowCards
          icon={<PaidIcon />}
          name="Confirmed Payments"
          numbers="3000"
          bg="normal"
          percent={70}
        />
        <ShowCards
          icon={<PaidIcon />}
          name="Pending Payments"
          numbers="3000"
          bg="light"
          percent={30}
        />
      </div>

      <div className="table-containter">
        <Table cols={columns} data={PaymentData} />
      </div>

      <div className="chart">
        <Linechart />
      </div>
    </div>
  );
};

export default Payments;
