import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import "../styles/components/sidenav.css";
import logo from "../assets/logo.jpeg";
import avatar from "../assets/avatar.png";
import { BiSolidDashboard, BiSolidReport } from "react-icons/bi";
import { AiOutlineCar } from "react-icons/ai";
import {
  MdEmergencyShare,
  MdBusinessCenter,
  MdWorkspacesFilled,
  MdPayments,
  MdLogout,
} from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

const Sidenavigation = ({logout}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const activeNavItem = navs.findIndex(nav => nav.link === location.pathname.substr(1));
    if (activeNavItem !== -1) {
      setActiveIndex(activeNavItem);
    }
  }, [location]);
  const navs = [
    {
      name: "Dashboard",
      icon: <BiSolidDashboard className="icon" />,
      link: "/",
    },
    {
      name: "Emergency",
      icon: <MdEmergencyShare className="icon" />,
      link: "emergency",
    },
    {
      name: "Parking",
      icon: <AiOutlineCar className="icon" />,
      link: "parking",
    },
    {
      name: "Business Permits",
      icon: <MdBusinessCenter className="icon" />,
      link: "business-permits",
    },
    {
      name: "Reporting incidences",
      icon: <BiSolidReport className="icon" />,
      link: "reporting-incidences",
    },
    {
      name: "Public Spaces",
      icon: <MdWorkspacesFilled className="icon" />,
      link: "public-spaces",
    },
    {
      name: "Payments",
      icon: <MdPayments className="icon" />,
      link: "payments",
    },
  ];
  const handleListClick = (index) => {
    setActiveIndex(index);
    activeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <nav>
        <div className="mainList">
          <div className="logoContainer">
            <a href="#">
              <img className="logo" src={logo} alt="logo" />
            </a>
          </div>
          <hr className="line" />
          {navs.map((nav, index) => (
            <div
              key={index}
              className={`list ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleListClick(index)}
              ref={index === activeIndex ? activeRef : null}
            >
                {index === activeIndex && (
                <>
                  <b></b>
                  <b></b>
                </>
              )}
              <NavLink to={nav.link}>
                {nav.icon}
                <span className="nav-name">{nav.name}</span>
              </NavLink>
            </div>
          ))}

          <hr className="line" />

          <div className="list">
            <a href="#">
              <MdLogout className="icon" />
              <span className="nav-item" onClick={logout}> Logout</span>
            </a>
          </div>
        </div>

        <div className="avatar">
          <div className="avatarimg">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="text">
            <p>Ndinda</p>
            <p>ndinda@gmail.com</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

Sidenavigation.propTypes = {logout: PropTypes.func.isRequired};

export default Sidenavigation;
