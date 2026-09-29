import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/footer'
import '../Styles/home.css'
import '../Styles/About.css'

const History = () => {
  return (
     <div className='history-section'>
      <Navbar />

      <section className='history'>
        <h2 className='main_history_heading'>🏛️ The History of the College</h2>
        <p className='about_all_history'>
         Founded in 1636 by a vote of the Great and General Court of the Massachusetts Bay Colony, the institution began its journey as the first college in the American colonies. Originally established in New Towne—later renamed Cambridge—the college started with just a single frame building and a handful of students. Over the centuries, it transformed from a small, local seminary into a world-renowned university, opening its foundational medical, divinity, and law schools in the late 18th and early 19th centuries. Through periods of war, societal shifts, and technological revolutions, the campus steadily expanded its borders and its curriculum, ultimately setting the standard for global higher education.
        </p>

        <div className='about_founder_section'>
          <div className='about_founder'>
            <h3 className='founder_heading'>👤 Our Visionary Founder</h3>
            <p className='about_founder'>The university owes its name and foundational momentum to John Harvard, a young Puritan minister from England. Upon his untimely death in 1638, he generously bequeathed half of his monetary estate and his entire library of over 320 volumes to the fledgling school. This monumental donation gave the institution the financial stability and academic resources it desperately needed to survive its earliest years. In recognition of his life-altering generosity, the General Court officially named the college in his honour in 1639, cementing John Harvard's legacy as the ultimate benefactor of modern higher learning.</p>
          </div>
          <div className='founder_img'><img src="../src/assets/images (6).jpg" alt="" /></div>
         
        </div>

         <div className='current_section'>
          <div className='about_current_section'>
            <h3 className='current_heading'>🌐 The Current Scenario</h3>
            <p className='about_currrent_para'>Today, the university stands as a premier global hub for research and academic excellence, led by its 31st President, Alan M. Garber. The institution currently welcomes a vibrant community of over 24,000 undergraduate and graduate students from across the globe, supported by robust financial aid programs that ensure accessibility for families of all economic backgrounds. Navigating a rapidly evolving modern landscape, the university continues to lead advancements in artificial intelligence, cutting-edge science, and the humanities, preparing its graduates to enter high-impact industries worldwide.</p>
          </div>
          <div className='current_img'><img src="../src/assets/images (7).jpg" alt="" /></div>
         
        </div>
      </section>
    
<Footer />
    </div>
  )
}

export default History