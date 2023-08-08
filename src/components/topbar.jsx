import {} from 'react'
import '../styles/components/topbar.css';
import {AiOutlineSearch} from 'react-icons/ai'
import {GrNotification} from 'react-icons/gr'
import sakaja from '../assets/sakaja.png'

const TopBar = () => {
  return (
    <div className='TopBar'>
      <div className='TopBarIntro'>
        <p className='first'>Hello User!</p>
        <p>Welcome back to the Dashboard</p>
      </div>
      <div className="searchBar">
        <input type="text" placeholder='Search...'/>
        <span ><AiOutlineSearch/></span>
      </div>
      <div className="notification">
        <div className="notificationBell"><GrNotification /></div>
        <div><img src={sakaja} alt="profile" /></div>
      </div>
    </div>
  )
}

export default TopBar
