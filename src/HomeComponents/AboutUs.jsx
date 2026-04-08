import React from 'react'

function AboutUs() {
    return (
        <div className=' Aboutus-Content'>
            <div className='Aboutus-text d-flex flex-column flex-md-row'>
                <small className='col-md-6'>About us</small>
                <h1 className='col-md-6'>We Shape brands, craft sleek website and digital products that boost revenue.</h1>
            </div>
            <div className='row Aboutus-card'>
                <div className='p-3 col-xs-12 col-sm-6 col-lg-3'>
                    <h1 className='Aboutus-numbers'>32+</h1>
                    <span className='Aboutus-bold '>Years of experience</span>
                    <p className='Aboutus-light'>Decades of digital products that transformed smart business.</p>
                </div>
                <div className='p-3 col-xs-12 col-sm-6 col-lg-3'>
                    <h1 className='Aboutus-numbers'>99%</h1>
                    <span className='Aboutus-bold'>Client satisfication rate</span>
                    <p className='Aboutus-light'>We turn projects into long term partnership with clear results.</p>
                </div>
                <div className='p-3 col-xs-12 col-sm-6 col-lg-3'>
                    <h1 className='Aboutus-numbers'>50+</h1>
                    <span className='Aboutus-bold'>Successful Projects</span>
                    <p className='Aboutus-light'>Helping now bold brands create unforgettable online moments.</p>
                </div>
                <div className='p-3 col-xs-12 col-sm-6 col-lg-3'>
                    <h1 className='Aboutus-numbers'>26+</h1>
                    <span className='Aboutus-bold'>Awards & Recognitions</span>
                    <p className='Aboutus-light'>Design that dares for stunning brands that will conquer.</p>
                </div>
            </div>
        
        </div>
  )
}

export default AboutUs