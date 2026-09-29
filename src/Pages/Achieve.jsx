import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import '../Styles/home.css'
import '../Styles/About.css'

const Achieve = () => {
  return (
   <div className='Achievements'>
      <Navbar />
      <h2 className='achivements-heading'>Achievements</h2>
      <img src="../src/assets/istockphoto-2198907844-612x612.jpg" alt="" />

        <section className='rating'>
         
        <div className='box1'>18
        <p className='rating_heading'>Average Classes</p></div>
        <div className='box1'>14:1
        <p className='rating_heading'>Student-Faculty Ratio</p></div>
        <div className='box1'>20+
        <p className='rating_heading'>Programs Delivered</p></div>
        
      </section>

       <h2 className='academic-achievement-heading'>🌟 Academic & Research Milestones</h2>
      <div className='academic-&-research'>
       
        {academic_students.map(function (namm, idy) {
          return (
            <div className=''></div>
          )
        })}
      </div>

     
     
      <Footer />
    </div>
  )
}

export default Achieve