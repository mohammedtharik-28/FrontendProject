import React from 'react'

function LetsTalkCard() {
    return (
        <div>
            <div className='d-flex flex-md-row flex-column p-5 m-5 LetsTalk-head'>
                <p className='col-md-4'>Lets Talk</p>
                <h1 className='col-md-8'>Let's drop us a line and get your project step by step.</h1>
            </div>
            <div className='d-flex flex-md-row flex-column m-4 p-3'>
                <div className='LetsTalk-ourDetails col-md-4 col-sm-12 mt-5'>
                    <p>Feel free to get in touch!</p>
                    <span><i className="bi bi-telephone"></i> +91 9788855521</span>
                    <p>How can we help you?!</p>
                    <span><i className="bi bi-at"></i> tharikmohammed.m@gmail.com</span>
                    <p>Come visit us.</p>
                    <span><i className="bi bi-buildings"></i> 63/1, UKC Nagar, Lions club near, Udumalpet - 642126</span>
                    <div className='LetsTalk-icon'>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter-x"></i>
                        <i class="bi bi-linkedin"></i>
                    </div>
                </div>
                <div className='GetInTouch-card col-md-6 mt-5'>
                    <p>Get in touch</p>
                    <p>Just fill out the form and our experts will be in touch right away with package and price to help you!</p>
                    <div className='GetInTouch-inputs d-flex flex-column'>
                        <input type="text" placeholder='Your Name' />
                        <input type="text" placeholder='Email Address' />
                        <input type="text" placeholder='Company Name' />
                        <input type="text" placeholder='Phone Number' />
                        <select className="form-select input-select">
                            <option>Choose Services</option>
                            <option>Brand Strategy</option>
                            <option>UI/UX Design</option>
                            <option>Digital Strategy</option>
                            <option>Social Media</option>
                            <option>Web Development</option>
                            <option>Product Design</option>
                        </select>
                    <textarea className='input-select pb-5' id=""  placeholder='Kindly provide enough information about your project...' ></textarea>
                    </div>
                    <button className='GetInTouch-btn'><i className='bi bi-arrow-right'></i><span>Submit Request</span></button>
                </div>
            </div>
        </div>
    )
}

export default LetsTalkCard