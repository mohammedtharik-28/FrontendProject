import React from 'react'
import ContactPageImage from '../assets/ContactPageImage.jpg'

function ContactFrontPage() {
  return (
    <div>
        <div className='ContactPage-Content' style={{backgroundImage:`url(${ContactPageImage})`}}>
            <div>
                <h1>Contact Us</h1>

            </div>
        </div>
    </div>
  )
}

export default ContactFrontPage