import React, { useState } from 'react'
import { Link } from 'react-router'
import "../Styles/Navbar_style.css"

const Navbar = () => {
  const [About_btn_move, setAbout_btn_move] = useState(false)
  const [Departments_btn_move, setDepartments_btn_move] = useState(false)
  const [Admission_btn_move, setAdmission_btn_move] = useState(false)
  const [Notice_btn_move, setNotice_btn_move] = useState(false)
  const [Campus_btn_move, setCampus_btn_move] = useState(false)
 
  return (
    <div className='main_conatiner'>
      <div className='for_logo'>
        <img src="src\assets\logo.png" alt="logo" />
      </div>

      <div className='for_btns'>
  {/* HOME LINK */}
       <div> <Link to='/' className='for_link_btns'> Home </Link></div>
        
  {/* ABOUT BUTTON */}
      <div onMouseEnter={() => setAbout_btn_move(true)}
        onMouseLeave={() => setAbout_btn_move(false)} >
        <button className='for_simple_btns'>About</button>

        {About_btn_move && (
          <div className='link_conatiner'>
            <Link to='/Vision' className='link_btn'>Vision</Link>
            <Link to='/History' className='link_btn'>History</Link>
            <Link to='/Principle_s_msg' className='link_btn'>Principle's msg</Link>
            <Link to='/Achieve' className='link_btn'>Achievements</Link>
          </div>
        )}
      </div>

{/* DEPARTMENTS / COURSES */}
      <div onMouseEnter={() => setDepartments_btn_move(true)}
        onMouseLeave={() => setDepartments_btn_move(false)}>
        <button className='for_simple_btns'>Departments/Courses</button>

        {Departments_btn_move && (
          <div className='link_conatiner'>
            <Link to='/Business&Management' className='link_btn'>Business & Management</Link>
            <Link to='/Commerce' className='link_btn'>Commerce</Link>
            <Link to='/Arts' className='link_btn'>Arts</Link>
            <Link to='/Computers' className='link_btn'>Computer Department</Link>
          </div>
        )}
      </div>

{/* Faculty */}
     <div> <Link to='/faculty' className='for_link_btns'> Faculty </Link></div>

{/* Admission elegibilty */}
      <div onMouseEnter={() => setAdmission_btn_move(true)}
        onMouseLeave={() => setAdmission_btn_move(false)}>
        <button className='for_simple_btns'>Addmissions</button>

        {Admission_btn_move && (
          <div className='link_conatiner'>
            <Link to='/Addmission_process' className='link_btn'>Process</Link>
            <Link to='/Addmission_eligibility' className='link_btn'>Eligibilty</Link>
            <Link to='/Addimission_fee' className='link_btn'>fee</Link>
            
          </div>
        )}
      </div>
     
      {/* NOTICE AND EVENTS */}
      <div onMouseEnter={() => setNotice_btn_move(true)}
        onMouseLeave={() => setNotice_btn_move(false)}>
        <button className='for_simple_btns'>Notice/Events</button>

        {Notice_btn_move && (
          <div className='link_conatiner'>
            <Link to='/Notice' className='link_btn'>Notice</Link>
            <Link to='/Events' className='link_btn'>Events</Link> 
          </div>
        )}
      </div>
     
      {/* CAMPUS AND GALLERY */}
       <div onMouseEnter={() => setCampus_btn_move(true)}
        onMouseLeave={() => setCampus_btn_move(false)}>
       <button className='for_simple_btns '>Campus/Gallery</button>

        {Campus_btn_move && (
          <div className='link_conatiner'>
            <Link to='/campus_photos' className='link_btn'>Campus's Photos</Link>
            <Link to='/Labs' className='link_btn'>Labs</Link> 
            <Link to='/Library' className='link_btn'>Library</Link> 
            <Link to='/Sports' className='link_btn'>Sports</Link> 
            <Link to='/Hostel' className='link_btn'>Hostel</Link> 
          </div>
        )}
      </div>

      {/* CONTACT */}
      <div><Link to='/contact' className='for_link_btns '>Contact</Link></div>
     
        </div>
   </div>
  )
}

export default Navbar