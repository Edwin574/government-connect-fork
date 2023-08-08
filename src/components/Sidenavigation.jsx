import {  } from 'react';
import '../styles/components/sidenav.css'
import logo from '../assets/logo.png'
import {BiSolidDashboard} from 'react-icons/bi'

const Sidenavigation = ()=> { 
    const navs = [
        {
            name: 'Dashboard',
            icon: <BiSolidDashboard/>
        },
        {
            name: 'Emergency',
            icon: ''
        },
        {
            name: 'Parking',
            icon: 'dash'
        },
        {
            name: 'Business Permits',
            icon: 'dash'
        },
        {
            name: 'Reporting incidences',
            icon: 'dash'
        },
        {
            name: 'Public Spaces',
            icon: 'dash'
        },
        {
            name: 'Make Payments',
            icon: 'dash'
        },
    ]
  return (
    <div>
        <nav>
            <ul>
                <li><a href="#"><img className='logo' src={logo} alt="logo"/></a></li>
                {
                    navs.map((nav, index) =>
                         <li key={index}>
                            <a href="#">
                                {nav.icon}
                                <span className='nav-item'>{nav.name}
                                </span>
                            </a>
                         </li>
                        )
                }
               
            </ul>
        </nav>
    </div>
  )
}

export default Sidenavigation
