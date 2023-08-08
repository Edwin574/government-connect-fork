import {} from "react";
import "../styles/components/sidenav.css";
import logo from "../assets/logo.png";
//import { BiSolidDashboard } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";

const Sidenavigation = () => {
  const navs = [
    {
      name: "Dashboard",
      icon: "",
      /*icon: {
        <BiSolidDashboard />
      }*/ linkLocation: "/",
    },
    {
      name: "Emergency",
      icon: "",
      linkLocation: "emergency",
    },
    {
      name: "Parking",
      icon: "dash",
      linkLocation: "parking",
    },
    {
      name: "Business Permits",
      icon: "dash",
      linkLocation: "permits",
    },
    {
      name: "Reporting incidences",
      icon: "dash",
      linkLocation: "report-incidence",
    },
    {
      name: "Public Spaces",
      icon: "dash",
      linkLocation: "public-spaces",
    },
    {
      name: "Make Payments",
      icon: "dash",
      linkLocation: "payments",
    },
  ];

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>
            <a href="#">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </li>
          {navs.map((nav, index) => (
            <NavLink key={index} to={nav.linkLocation}>
              {/*{nav.icon}*/}
              <span className="nav-item">{nav.name}</span>
            </NavLink>
          ))}
        </ul>
        <Outlet />
      </nav>
    </div>
  );
};

export default Sidenavigation;
