import React, { useState } from 'react'
import '../Styles/home.css'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router'

import { departments , latestNews } from '../Data/programs_homepage'


const Home = () => {
  const [index, setindex] = useState(0)
  const next_news = () => {
    if(index < latestNews.length - 1)
    setindex(index + 1);
  };
  const previous_news = () => {
    if (index > 0)
    setindex(index - 1);
  }
const update_news = latestNews[index]
 
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
        {/* first arrow button */}
        <button className='arrow-btns' onClick={previous_news}>&#9664;</button>
                <div className='news-info-container'>
          <h2 className='recent_news-heading'>Recent News</h2>
                <h4 className='news-name'>{update_news.title}</h4>
          <h5 className='news_date'>{update_news.date}</h5>
                <p className='about-news'>{update_news.paragraph}</p>
        </div>
        <div className='image-Container'>
          <img src={update_news.news_img} alt="news" className='news_actual-image'/>
              </div>
       {/* second arrow button */}
        <button className='arrow-btns' onClick={next_news}>&#9654;</button>
        
      </section>

       <h1 className='conact-us-heading'>Conact Us</h1>
      <section className='contact'>
        <div className='contact_left_box'>
          <p>📩apexclz4@gmail.com</p>
          <p>📍290 Vaughan Street Winnipeg, Manitoba R3B 2N8 CANADA</p>
        </div>
<hr />
        <div className='contact_right_box'>
          <p>+1 78347-87345</p>
          <p>+1 47847-88905</p>
          <p>+1 86647-32405</p>
        </div>
      </section>

      <section className='footer'>
      {/* <img src="../src/assets/logo.png" alt="footer-logo" className='footer-logo' /> */}

      <div className='box2'>290 Vaughan Street Winnipeg, Manitoba R3B 2N8 CANADA</div>
      <div className='box3'>
        <Link to='/Contact' className='link-heading'>Contact us</Link>
        <Link to='' className='link-heading'>Land Acknowledgement</Link>
        <Link to='' className='link-heading'>Unsubscribe</Link>
      </div>
      <div className='box4'>
        <div className='for-links'>
            <Link to='https://www.instagram.com/' className='link-img'><img src="../src/assets/insta-removebg-preview (1).png" alt="insta" className='footer-link-logo-apps' /></Link> 
            <Link to='https://in.linkedin.com/'><img src="../src/assets/image-removebg-preview.png" alt="insta" className='footer-link-logo-apps' /></Link>
            <Link to='https://www.facebook.com/'><img src="../src/assets/u_tube__6_-removebg-preview.png" alt="insta" className='footer-link-logo-apps' /></Link>
            <Link to='https://www.youtube.com/'><img src="../src/assets/face__6_-removebg-preview.png" alt="insta" className='footer-link-logo-apps' /></Link>
        </div>

        <Link to ='/History' className='privacy'>Privacy Policy</Link>
        <div className='name_link'>@ 2026 Alex College</div>
        </div>
      </section>
      <div className='last-line-box'>
      <hr className='footer_line' />
      <h3 className='last-line'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia sed magnam consectetur explicabo repellat similique eligendi, aliquid , consectetur explicabo repellat similique eligendi, aliquid</h3>
      </div>
      </section>
  )
}
export default Home