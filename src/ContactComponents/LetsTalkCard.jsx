import React from 'react'

function LetsTalkCard() {
    return (
        <div>
            <div className='d-flex flex-md-row flex-column LetsTalk-head p-sm-6'>
                <p className='col-md-4'>Lets Talk</p>
                <h1 className='col-md-8'>Let's drop us a line and get your project step by step.</h1>
            </div>
            <div className='d-flex flex-md-row flex-column  p-3'>
                <div className='LetsTalk-ourDetails col-md-5 col-sm-12 mt-5'>
                    <p>Feel free to get in touch!</p>
                    <span><i className="bi bi-telephone"></i> +91 9788855521</span>
                    <p>How can we help you?!</p>
                    <span><i className="bi bi-at"></i> tharikmohammed.m@gmail.com</span>
                    <p>Come visit us.</p>
                    <span><i className="bi bi-buildings"></i> 63/1, UKC Nagar, Lions club near, Udumalpet - 642126</span>
                    <div className='LetsTalk-icon'>
                        <i className="bi bi-facebook"></i>
                        <i className="bi bi-twitter-x"></i>
                        <i className="bi bi-linkedin"></i>
                    </div>
                </div>
                <div className='GetInTouch-card col-sm-10 col-md-5 mt-5'>
                    <p>Get in touch</p>
                    <p>Just fill out the form and our experts will be in touch right away with package and price to help you!</p>
                    <div className="GetInTouch-inputs">

                        <div className="input-row">
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Email Address" />
                        </div>

                        <div className="input-row">
                            <input type="text" placeholder="Company Name" />
                            <input type="text" placeholder="Phone Number" />
                        </div>

                        <select className="input-select">
                            <option>Choose Services</option>
                            <option>Brand Strategy</option>
                            <option>UI/UX Design</option>
                            <option>Digital Strategy</option>
                            <option>Social Media</option>
                            <option>Web Development</option>
                            <option>Product Design</option>
                        </select>

                        <textarea
                            className="input-select textarea"
                            placeholder="Kindly provide enough information about your project..."
                        ></textarea>
                    </div>
                    <button className='GetInTouch-btn'><i className='bi bi-arrow-right'></i><span>Submit Request</span></button>
                </div>
            </div>
        </div>
    )
}

export default LetsTalkCard