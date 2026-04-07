import React from 'react'
import FrontCoverImage from '../assets/frontCover-image.jpg'

function Frontcover() {
    return (
        <div>
            <div className='frontCover-content'
                style={{ backgroundImage: `url(${FrontCoverImage})` }}>
            </div>
            <div className='frontCover-head'>
                <h1>Design Delivers With Bold Digital Storytelling.</h1>
            </div>
            <div className='frontCover-bottom'>
                <div></div>
                <div className='frontCover-bottom-content'>
                    <p>We ignite bold brands, launch striking websites, and build digital products that spark growth and command attention.</p>
                    <a href=""><i className="bi bi-arrow-right"> Our latest works</i></a>
                </div>
            </div>
        </div>
    )
}

export default Frontcover