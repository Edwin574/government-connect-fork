import {  } from 'react';
import '../styles/components/sidenav.css'
import logo from '../assets/logo.png'
import sakaja from '../assets/sakaja.png'
import {BiSolidDashboard, BiSolidReport} from 'react-icons/bi'
import {AiOutlineCar} from 'react-icons/ai'
import {MdEmergencyShare, MdBusinessCenter, MdWorkspacesFilled, MdPayments, MdLogout} from 'react-icons/md'
import { NavLink } from 'react-router-dom';

const Sidenavigation = ()=> { 
    const navs = [
        {
            name: 'Dashboard',
            icon: <BiSolidDashboard/>,
            link: "/",
        },
        {
            name: 'Emergency',
            icon: <MdEmergencyShare/>,
            link: "emergency",
        },
        {
            name: 'Parking',
            icon: <AiOutlineCar/>,
            link: "parking",
        },
        {
            name: 'Business Permits',
            icon: <MdBusinessCenter/>,
            link: "business-permits",
        },
        {
            name: 'Reporting incidences',
            icon: <BiSolidReport/>,
            link: "reporting-incidences",
        },
        {
            name: 'Public Spaces',
            icon: <MdWorkspacesFilled/>,
            link: "public-spaces",
        },
        {
            name: 'Make Payments',
            icon: <MdPayments/>,
            link: "payments",
        },
    ]
  return (
    <div>
        <nav>
            <div className='mainList'>
                <div className='logoContainer'><a href="#"><img className='logo' src={logo} alt="logo"/></a></div>

                {
                    navs.map((nav, index) =>
                         <div key={index} className='list'>
                            <NavLink to={nav.link}>
                                {nav.icon}
                                <span className='nav-item'>{nav.name}
                                </span>
                            </NavLink>
                         </div>
                        )
                }
               
               <hr className='line'/>

               <div className='list'>
                            <a href="#">
                                <MdLogout/>
                                <span className='nav-item'> Logout
                                </span>
                            </a>
                         </div>
            </div>

            <div className='avatar'>
                <div><img src={sakaja} alt="avatar"/></div>
                <div className='text'>
                    <p>Sakaja</p>
                    <p>sakaja@gmail.com</p>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Sidenavigation;
