import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import Table from "../components/table";
import Barchart from "../charts/Barchart";
import { IncidenceData } from "../data/Incidences";
import "../styles/components/tables.css";
import { columns } from "../data/Incidences";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIncidence } from "../redux/reduxSlice/incidenceSlice";

const ReportIncidence = () => {
  const incidence = useSelector((state) => state.incidence.incidence);
  const dispatch = useDispatch();

  /*useEffect(() => {
    dispatch(fetchIncidence())
  }, [incidence])*/

  return (
    <div>
      <div className="mainCards">
        <ShowCards
          icon={<LocalHospitalIcon />}
          name="Reported Cases "
          numbers="3000"
          bg="light"
          percent={100}
        />
        <ShowCards
          icon={<LocalParkingIcon />}
          name="Cases solved"
          numbers="300"
          bg="normal"
          percent={55}
        />
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="pending"
          numbers="30"
          bg="light"
          percent={45}
        />
      </div>

      <div className="table-containter">
        <Table cols={columns} data={IncidenceData} />
      </div>

      <div className="chart">
        <Barchart />
      </div>
    </div>
  );
};

export default ReportIncidence;
