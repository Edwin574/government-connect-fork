import "../styles/components/tables.css";

import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import Table from "../components/table";
// import { ParkData } from "../data/park";
// import { columns } from "../data/park";
// import { PermitData } from "../data/Permit";
import { columns } from "../data/Permit";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { fetchPermit } from "../redux/reduxSlice/permitSlice";
import Linechart from "../charts/Linechart";
import axios from "axios";

const Permits = () => {
  // const permit = useSelector((state) => state.permit.permit);
  // const dispatch = useDispatch();

  const [permitData, setPermitData] = useState([]);

  useEffect(() => {
    axios
      .get("https://gvmt.oderowrites.com/Api.php/incidence/list")
      .then((res) => {
        setPermitData(res.data.users);
      })
      .catch((err) => console.log("Couldnt load data ", err));
  }, []);

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
        <Table cols={columns} data={permitData} />
      </div>

      <div className="chart">
        <Linechart />
      </div>
    </div>
  );
};

export default Permits;
