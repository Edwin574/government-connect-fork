import {} from 'react'
import '../styles/pages/contetcontaner.css'
import Dashboard from './dashboard'
import Emergency from './Emergency'
import Login from './Login'
import Parking from './Parking'
import Payments from './Payments'
import Permits from './Permits'
import PublicSpaces from './PublicSpaces'
import ReportIncidence from './ReportIncidence'
import { Route, Routes } from 'react-router-dom'

const ContentContainer = () => {
  return (  
    <div className='contentContainer'>
      <Routes>
        <Route path="/" exact element={<Dashboard/>} />
        <Route path="emergency" exact element={<Emergency/>} />
        <Route path="login" exact element={<Login />} />
        <Route path="parking" exact element={<Parking />} />
        <Route path="payments" exact element={<Payments />} />
        <Route path="permits" exact element={<Permits />} />
        <Route path="public-spaces" exact element={<PublicSpaces />} />
        <Route path="report-incidence" exact element={<ReportIncidence />} />
     </Routes>   
      {/* <Dashboard/> */}
    </div>
    
  )
}

export default ContentContainer
