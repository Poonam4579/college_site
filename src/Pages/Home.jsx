import React from 'react'
import '../Styles/home.css'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router'

import { departments } from '../Data/programs_homepage'


const Home = () => {
  return (
    <section className='home_container'>
    <div className='hero_section'>
      <Navbar />

      <h1 className='slogan'>Education for a Better World</h1>
      <Link to='/explore_programs' className='programs_link'>Explore Programs »</Link>
      
      </div>

      <section className='introducation_part'>
        <h2 className='intro_heading'>Introduction</h2>
        <p className='intro_para'>Welcome to Apex Education, where academic excellence meets real-world innovation. Established with a vision to empower the next generation of leaders, our college offers a dynamic learning environment that blends rigorous academics with hands-on practical experience. At Apex Education, we are committed to fostering creativity, critical thinking, and global perspectives across all our diverse degree programs. With state-of-the-art facilities, a dedicated faculty of industry experts, and a vibrant campus community, we provide our students with the tools and mentorship they need to excel in their careers and shape a brighter future.</p>
      </section>

      <h3 className='why_choose'>Why to choose us?</h3>
      <section className='rating'>
         
        <div className='box1'>18
        <p className='rating_heading'>Average Classes</p></div>
        <div className='box1'>14:1
        <p className='rating_heading'>Student-Faculty Ratio</p></div>
        <div className='box1'>20+
        <p className='rating_heading'>Programs Delivered</p></div>
        
      </section>

       <h2 className='programs_main_heading'>Popular Programs</h2>
      <section className='popular_programs'>
        {departments.map(function (elem , idx) {
          return (
                 <div key={idx} className='programs_2nd_small_container'>
                   <h3 className='program_heading'>{elem.department_name}</h3>
                   <img src={elem.img} alt="course_img" className='img_of_programs' />
                   <button className='programs_learn_btn'>Learn More →</button>
                 </div>
               )
             })}
      </section>

      <section className='recent_news'>
        <button className='arrow-btns'>&#9664;</button>
        <div className='news-info-container'>
          <h2 className='recent_news-heading'>Recent News</h2>
          <h4 className='news-name'>She show International</h4>
          <h5 className='news_date'>April 23, 2026</h5>
          <p className='about-news'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, itaque! Ullam reiciendis voluptate libero laudantium autem nam, odit labore eaque nesciunt asperiores nisi obcaecati doloribus totam rem tenetur molestiae, qui sapiente debitis, deserunt inventore. Ratione debitis, saepe quis laborum, nihil expedita veritatis accusamus autem repudiandae corrupti illum delectus perferendis excepturi, quasi quaerat magnam maiores impedit.</p>
          
        </div>
        <div className='image-Container'>
          <img src="../src/assets/download.jpg" alt="news" className='news_actual-image'/>
        </div>

        <button className='arrow-btns'>&#9654;</button>
        
      </section>
      </section>
  )
}
export default Home