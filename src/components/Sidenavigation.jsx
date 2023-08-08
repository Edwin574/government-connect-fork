import {  } from 'react';
import '../styles/components/sidenav.css'
import logo from '../assets/logo.png'
import sakaja from '../assets/sakaja.png'
import {BiSolidDashboard} from 'react-icons/bi'

const Sidenavigation = ()=> { 
    const navs = [
        {
            name: 'Dashboard',
            icon: <BiSolidDashboard/>
        },
        {
            name: 'Emergency',
            icon: <BiSolidDashboard/>
        },
        {
            name: 'Parking',
            icon: <BiSolidDashboard/>
        },
        {
            name: 'Business Permits',
            icon: <BiSolidDashboard/>
        },
        {
            name: 'Reporting incidences',
            icon: <BiSolidDashboard/>
        },
        {
            name: 'Public Spaces',
            icon: <BiSolidDashboard/>
        },
        {
            name: 'Make Payments',
            icon: <BiSolidDashboard/>
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
                            <a href="#">
                                {nav.icon}
                                <span className='nav-item'>{nav.name}
                                </span>
                            </a>
                         </div>
                        )
                }
               
               <hr className='line'/>

               <div className='list'>
                            <a href="#">
                                <BiSolidDashboard/>
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
