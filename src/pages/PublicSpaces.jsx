import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import Table from "../components/table";

import "../styles/components/tables.css";

import Barchart from "../charts/Barchart";
import { SpacesData } from "../data/Spaces";
import { columns } from "../data/Spaces";
import { useSelector } from "react-redux";


const PublicSpaces = () => {
  const publicSpaces = useSelector((state) => state.publicSpace.publicSpace);

  return (
    <div>
      <div className="mainCards">
        <ShowCards
          icon={<LocalHospitalIcon />}
          name="Emergency Services"
          numbers="200"

          bg="normal"
          percent={100}

        />
        <ShowCards
          icon={<LocalParkingIcon />}
          name="Emergency Services"
          numbers="300"

          bg="light"
          percent={76}

        />
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="Emergency Services"
          numbers="30"
         bg="normal"
          percent={24}
        />
      </div>

      <div className='table-containter'>

        <Table cols={columns} data={SpacesData} />
      </div>

      <div className="chart">

        <Barchart />
      </div>
    </div>
  );
};

export default PublicSpaces;
