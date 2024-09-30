import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { FaFacebook, FaInstagram, FaYoutube, FaXTwitter   } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className='footer-subdiv'>
          <div className='logo-div'>
            <img src={logo} alt="logo" className='logo' />
          </div>
          <div className='content-div'>
            <div className='each-content'>
              <h4>Customer Service</h4>
              <p>FAQs</p>
              <p>Shipping & Delivery</p>
              <p>Returns & Exchanges </p>
              <p>Warranty Information</p>
              <p>Contact Us</p>
            </div>
            <div>
              <h4>Explore</h4>
              <p>New Arrivals</p>
              <p>Best Sellers</p>
              <p>Clearance</p>
              <p>Gift Cards</p>
              <p>Blog</p>
            </div>
            <div>
              <h4>About</h4>
              <p>Our Story</p>
              <p>Sustainability</p>
              <p>Careers </p>
              <p>Press</p>
              <p>Affiliates</p>
            </div>
            <div>
              <h4>Support</h4>
              <p>Size Guide</p>
              <p>Bike Maintenance Tips</p>
              <p>Product Registration </p>
              <p>Live Chat Support</p>
              <p>AffiliatesTrack Your Order</p>
            </div>
          </div>
        </div> 
        <br></br>
        <div className='line'></div>
        {/* <br></br> <br></br> */}
        <div className='footer-bottom'>
          <div className='social-media'>
            <h4>Follow Us</h4>
            <div className='icons'>
            <p className='icon i1'><FaFacebook /></p>
            <p className='icon i2'><FaXTwitter  /></p>
            <p className='icon i3'><FaInstagram /></p>
            <p className='icon i4'><FaYoutube /></p>
            </div>
          </div>
          <p><IoMdMail />: bikeverse@gmail.com</p>
          <p>&copy; 2021 BikeVerse. All Rights Reserved</p>
          </div>
      </div>
    </div>
  )
}

export default Footer
