import React from 'react'
import ContactPageImage from '../assets/ContactPageImage.jpg'
import { Link } from "react-router-dom";

function ContactFrontPage() {
  return (
    <div>
        <div className='ContactPage-Content' style={{backgroundImage:`url(${ContactPageImage})`}}>
            <div className='Contact-head'>
                <h1>Contact Us</h1>
                <Link to="/" >Home </Link><i class="bi bi-dot"></i><span>Contact Us</span>
            </div>
        </div>
    </div>
  )
}

export default ContactFrontPage