import "../styles/components/tables.css";

import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
// import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
// import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import Table from "../components/table";
import Barchart from "../charts/Barchart";
// import { ParkData } from "../data/park";
// import { columns } from "../data/park";
import { PermitData } from "../data/Permit";
import { columns } from "../data/Permit";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPermit } from "../redux/reduxSlice/permitSlice";

const Permits = () => {
  const permit = useSelector((state) => state.permit.permit);
  const dispatch = useDispatch();

  /*useEffect(() => {
    dispatch(fetchPermit());
  }, [permit]);*/

  return (
    <div>
      <div className="mainCards">
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="Permit Requests"
          numbers="2330"
          bg="light"
          percent={100}
        />
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="Granted Permits"
          numbers="1570"
          bg="normal"
          percent={56}
        />
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="Pending Permits"
          numbers="600"
          bg="light"
          percent={44}
        />
      </div>

      <div className="table-containter">
        <Table cols={columns} data={PermitData} />
      </div>

      <div className="chart">
        <Barchart />
      </div>
    </div>
  );
};

export default Permits;
