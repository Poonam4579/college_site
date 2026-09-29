import React from 'react'
import { Link } from 'react-router'
import "../Styles/home.css"


const Footer = () => {
  return (
    <div>
          <section className='footer'>

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
    </div>
  )
}

export default Footer