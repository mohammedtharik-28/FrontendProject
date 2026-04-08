import React from 'react'
import FrontCoverImage from '../assets/frontCover-image.jpg'
import reel1 from '../assets/reelpic1.jpeg'
import reel2 from '../assets/reelpic2.jpeg'
import reel3 from '../assets/reelpic3.jpeg'

function Frontcover() {
    return (

        <div className='frontCover-content'
            style={{ backgroundImage: `url(${FrontCoverImage})` }}>

            <div className='frontCover-head'>
                <h1>Design Delivers With Bold Digital Storytelling.</h1>
            </div>
            <div className='frontCover-bottom d-flex flex-column'>
                <div className='frontCover-Reelcard'>
                    <div className='reelIcons'>
                        <img src={reel1} alt="" />
                        <img src={reel2} alt="" />
                        <img src={reel3} alt="" />
                    </div>
                    <div className=''>
                        <div><i className='bi bi-play-fill'></i></div>
                        <p>Showreel</p>
                    </div>
                </div>
                <div className='frontCover-bottom-content'>
                    <p>We ignite bold brands, launch striking websites, and build digital products that spark growth and command attention.</p>
                    <a href=""><i className="bi bi-arrow-right"> Our latest works</i></a>
                </div>
            </div>

            <div className='frontCover-bottom-links'>
                <p>Brand Strategy</p>
                <p>UI/UX Design</p>
                <p>Digital Strategy</p>
                <p className='p-0'>Social Media</p>
            </div>
        </div>
    )
}

export default Frontcover