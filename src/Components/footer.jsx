import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <img src=".../src/assets/logo.png" alt="footer-logo" />

      <div className='box2'>290 Vaughan Street Winnipeg, Manitoba R3B 2N8 CANADA</div>
      <div className='box3'>
        <h4>Contact us</h4>
        <h4>Land Acknowledgement</h4>
        <h4>Unsubscribe</h4>
      </div>
      <div className='box4'>
        <div className='for-links'>
          <p className='insta'>&#xF437;</p>
          <p className='insta'>&#xF437;</p>
          <p className='insta'>&#xF437;</p>
          <p className='insta'>&#xF437;</p>
        </div>

        <div className='privacy'>Privacy Policy</div>
        <div className='name_link'>@ 2026 Alex College</div>
      </div>
    </div>
  )
}

export default Footer