<<<<<<< HEAD

import "../styles/components/tables.css"
=======
import "../styles/components/tables.css";

>>>>>>> 54383ccedbcd8a8972f9a781a2b227ffa4a6f60c
import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import Table from "../components/table";
<<<<<<< HEAD
import Barchart from "../charts/Barchart";

=======
// import { ParkData } from "../data/park";
// import { columns } from "../data/park";
>>>>>>> 54383ccedbcd8a8972f9a781a2b227ffa4a6f60c
import { PermitData } from "../data/Permit";
import { columns } from "../data/Permit";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPermit } from "../redux/reduxSlice/permitSlice";
import Linechart from "../charts/Linechart";

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

<<<<<<< HEAD
      <div className='table-containter'>
        <Table cols={columns} data={PermitData}/>
=======
      <div className="table-containter">
        <Table cols={columns} data={PermitData} />
>>>>>>> 54383ccedbcd8a8972f9a781a2b227ffa4a6f60c
      </div>

      <div className="chart">
        <Linechart />
      </div>
    </div>
  );
};

export default Permits;
