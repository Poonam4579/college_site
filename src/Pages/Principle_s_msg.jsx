import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import '../Styles/home.css'
import '../Styles/About.css'

const Principle_s_msg = () => {
  return (
    <div className='principle-msg-section'>
      <Navbar />

       <div className='about_founder_section'>
          <div className='about_founder'>
            <h3 className='founder_heading'>Principal's Message</h3>
          <p className='about_founder'>"Welcome to Alex Eduction, an institution dedicated to academic excellence, innovation, and holistic development. Since our inception, we have strived to create an environment where young minds are nurtured to think critically, challenge boundaries, and lead with integrity. 
            As we look toward the future, our focus remains on fostering a culture of research, creativity, and inclusivity. Whether you are a current student, an alumnus, or a visitor exploring our campus for the first time, I invite you to join us on this journey of learning, growth, and transformation."
            </p>
          </div>
          <div className='founder_img'><img src="../src/assets/images (6).jpg" alt="teacher-img" /></div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Principle_s_msg
