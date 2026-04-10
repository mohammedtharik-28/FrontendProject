import React from 'react'
import { Link } from "react-router-dom";

function ContactEndCard() {
  return (
    <>
      <div className='ContactEndCard-content d-flex flex-column flex-sm-column flex-md-row justify-content-between'>
        <div className='col-sm-4 col-xs-12'>
          <h1>Genzia</h1>
          <p>We shape brands, craft sleek website and digital products that boost revenue.</p>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-twitter-x"></i>
          <i className="bi bi-linkedin"></i>
        </div>
        <div >
          <h5>About</h5>
          <div className='d-flex flex-column '>
            <Link>About Us</Link>
            <Link>Leadership Team</Link>
            <Link>Our Portfolio</Link>
            <Link>Contact Us</Link>
            <Link>Pricings</Link>
          </div>
        </div>
        <div>
          <h5>Services</h5>
          <div className='d-flex flex-column '>
            <Link>Brand Strategy</Link>
            <Link>UI/UX Design</Link>
            <Link>Digital Strategy</Link>
            <Link>Social Media</Link>
            <Link>Web Development</Link>
            <Link>Product Design</Link>
          </div>
        </div>
        <div>
          <h5>Resources</h5>
          <div className='d-flex flex-column'>
            <Link>News & Media</Link>
            <Link>Pricing & Plans</Link>
            <Link>How it Works</Link>
            <Link>Key Features</Link>
            <Link>Testimonials</Link>
          </div>
        </div>
        <div>
          <h5>Quick Contact</h5>
          <div className='d-flex flex-column '>
            <Link>2307 Beverley Rd Brooklyn, New York, United States.</Link>
            <Link style={{ color: "orangered", fontSize: "12px" }}>tharikmohammed.m@gmail.com</Link>
            <Link style={{ fontSize: "14px", fontWeight: "700" }}>+91 9788855512</Link>
          </div>
        </div>
      </div>
       <div>
          <p>@2026 Genzia, All Rights Reserved. With Love by <Link>CMSSuperheroes</Link></p>
        </div>
    </>
  )
}

export default ContactEndCard