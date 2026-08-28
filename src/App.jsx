import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Vision from './Pages/Vision'
import History from './Pages/History'
import Achieve from './Pages/Achieve'
import Principle_s_msg from './Pages/Principle_s_msg'
import Arts from './Pages/Arts'
import Business_Management from './Pages/Business&Management'
import Commerce from './Pages/Commerce'
import Computers from './Pages/Computers'
import Addmission_process from './Pages/Addmission_process'
import Addmission_eligibility from './Pages/Addmission_eligibility'
import Addimission_fee from './Pages/Addimission_fee'
import Notice from './Pages/Notice'
import Events from './Pages/Events'
import Campus_photos from './Pages/campus_photos'
import Labs from './Pages/Labs'
import Library from './Pages/Library'
import Sports from './Pages/Sports'
import Hostel from './Pages/Hostel'
import Contact from './Pages/Contact'
import Faculty from './Pages/Faculty'


const App = () => {
  return (
   
    <div>
      {/* <div>  <Navbar/></div> */}
     
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Vision' element={<Vision />} />
        <Route path='/History' element={<History />} />
        <Route path='/Achieve' element={<Achieve />} />
        <Route path='/Principle_s_msg' element={<Principle_s_msg />} />
        <Route path='/Arts' element={<Arts />} />
        <Route path='/Business&Management' element={<Business_Management />} />
        <Route path='/Commerce' element={<Commerce />} />
        <Route path='/Computers' element={<Computers />} />
        <Route path='/Faculty' element={<Faculty />} />
        <Route path='/Addmission_process' element={<Addmission_process />} />
        <Route path='/Addmission_eligibility' element={<Addmission_eligibility />} />
        <Route path='/Addimission_fee' element={<Addimission_fee />} />
        <Route path='/Notice' element={< Notice />} />
        <Route path='/Events' element={< Events />} />
        <Route path='/campus_photos' element={<Campus_photos/>} />
        <Route path='/Labs' element={<Labs/>} />
        <Route path='/Library' element={<Library/>} />
        <Route path='/Sports' element={<Sports/>} />
        <Route path='/Hostel' element={<Hostel/>} />
        <Route path='/Contact' element={<Contact/>} />
        
      </Routes>
    </div>
  )
}

export default App