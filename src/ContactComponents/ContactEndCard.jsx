import React from 'react'
import { Link } from "react-router-dom";

function ContactEndCard() {
  return (
    <>
      <div className='ContactEndCard-content'>
        <div className='d-flex flex-column flex-sm-column flex-md-row justify-content-between'>
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
              <Link className="footer-hover"><span>About Us</span></Link>
              <Link className="footer-hover"><span>Leadership Team</span></Link>
              <Link className="footer-hover"><span>Our Portfolio</span></Link>
              <Link className="footer-hover"><span>Contact Us</span></Link>
              <Link className="footer-hover"><span>Pricings</span></Link>
            </div>
          </div>
          <div>
            <h5>Services</h5>
            <div className='d-flex flex-column '>
              <Link className="footer-hover"><span>Brand Strategy</span></Link>
              <Link className="footer-hover"><span>UI/UX Design</span></Link>
              <Link className="footer-hover"><span>Digital Strategy</span></Link>
              <Link className="footer-hover"><span>Social Media</span></Link>
              <Link className="footer-hover"><span>Web Development</span></Link>
              <Link className="footer-hover"><span>Product Design</span></Link>
            </div>
          </div>
          <div>
            <h5>Resources</h5>
            <div className='d-flex flex-column'>
              <Link className="footer-hover"><span>News & Media</span></Link>
              <Link className="footer-hover"><span>Pricing & Plans</span></Link>
              <Link className="footer-hover"><span>How it Works</span></Link>
              <Link className="footer-hover"><span>Key Features</span></Link>
              <Link className="footer-hover"><span>Testimonials</span></Link>
            </div>
          </div>
          <div>
            <h5>Quick Contact</h5>
            <div className='d-flex flex-column '>
              <Link className=" footer-hover-link">2307 Beverley Rd Brooklyn, New York, United States.</Link>
              <Link className="footer-hover-link" style={{ color: "orangered", fontSize: "12px" }}>Genzia.com</Link>
              <Link className=" footer-hover-link" style={{ fontSize: "14px", fontWeight: "700" }}>+91 9788855512</Link>
            </div>
          </div>
        </div>
        <div className='ContactEndCard-bottom row align-items-center'>

          <p className='col-md-6 col-12 mb-2 mb-md-0'>
            @2026 Genzia, All Rights Reserved. With Love by{" "}
            <Link className="footer-hover-link" to="/">CMSSuperheroes</Link>
          </p>

          <div className='col-md-6 col-12 text-md-end Endcard-links'>
            <Link className="footer-hover-link" to="/terms">Terms & Conditions</Link> <span>-</span>
            <Link className="footer-hover-link" to="/privacy"> Privacy Policy</Link> <span>-</span>
            <Link className="footer-hover-link" to="/sitemap"> Sitemap</Link>
          </div>
        </div>

        <div className='EndCard-Text d-none d-md-block'>
          <h1>Genzia</h1>
        </div>
      </div>
    </>
  )
}

export default ContactEndCard