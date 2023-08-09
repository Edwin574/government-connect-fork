import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import Table from "../components/table";
import Barchart from "../charts/Barchart";
import { SpacesData } from "../data/Spaces";
import { columns } from "../data/Spaces";

const PublicSpaces = () => {
  const publicSpaces = useSelector((state) => state.publicSpaces.publicSpaces);

  return (
    <div>
      <div className="mainCards">
        <ShowCards
          icon={<LocalHospitalIcon />}
          name="Emergency Services"
          numbers="200"
        />
        <ShowCards
          icon={<LocalParkingIcon />}
          name="Emergency Services"
          numbers="300"
        />
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="Emergency Services"
          numbers="30"
        />
      </div>

      <div>
        <Table cols={columns} data={SpacesData} />
      </div>

      <div className="chart">
        <Barchart />
      </div>
    </div>
  );
};

export default PublicSpaces;
