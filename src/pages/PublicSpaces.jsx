import "../styles/pages/dashboard.css";
import ShowCards from "../components/cards";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import AddBusinessTwoToneIcon from "@mui/icons-material/AddBusinessTwoTone";
import Table from "../components/table";

import "../styles/components/tables.css";

import Linechart from "../charts/Linechart";
import { SpacesData } from "../data/Spaces";
import { columns } from "../data/Spaces";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from 'axios'
// import { fetchPublicSpace } from "../redux/reduxSlice/publicSpaceSlice";

const PublicSpaces = () => {
  // const publicSpaces = useSelector((state) => state.publicSpace.publicSpace);
  // const dispatch = useDispatch();
  const [publicSpace, setPublicSpace] = useState([]);
  useEffect(() => {
    axios.get('http://gvmt.oderowrites.com/Api.php/spaces/list')
    .then((res)=>{
      console.log(res.data)
      let data = res.data.users.map((space) => {
        if (space.location === "1") {
          space.location = 'Carnivore grounds';
          space.status = "pending"
        } else if (space.location === "2") {
          space.location = 'Rama grounds';
          space.status = "confirmed"
        } else if (space.location === "3") {
          space.location = 'Jakaranda';
          space.status = "received"
        }
        return space;
      });
      console.log(data)
      setPublicSpace(data);
    })
    .catch((err)=> console.log("Couldnt load the spaces data", err));
  }, []);

  return (
    <div>
      <div className="mainCards">
        <ShowCards
          icon={<AddBusinessTwoToneIcon />}
          name="Spaces requested"
          numbers={publicSpace.length}
          bg="normal"
          percent={24}
        />
        <ShowCards
          icon={<LocalHospitalIcon />}
          name="Spaces booked"
          numbers="2"
          bg="normal"
          percent={100}
        />
        <ShowCards
          icon={<LocalParkingIcon />}
          name="Spaces remaining"
          numbers="30"
          bg="light"
          percent={76}
        />
        
      </div>

      <div className="table-containter">
        <Table cols={columns} data={publicSpace} />
      </div>

      <div className="chart">
        <Linechart />
      </div>
    </div>
  );
};

export default PublicSpaces;
