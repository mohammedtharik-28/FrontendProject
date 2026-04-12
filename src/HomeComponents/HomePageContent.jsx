import React from 'react'
import Homepageimage1 from '../assets/Homepageimage.jpg'
import Reelpic from '../assets/reelpic1.jpeg'

function HomePageContent() {
    return (
        <div className='text-center'>
            <div className='HomePageImage1'>
                <img src={Homepageimage1} alt="" />
                <div className='text-overlay'>
                    <h1>Helping brands shine online.</h1>
                </div>
            </div>
            <div className='HomePageContent1'>
                <div>
                    <p>We craft bold brands, build fast websites & launch products that grow huge business with decade of proven expertise, we also deliever measureable long term results to our clients.</p>
                </div>
                <div className="about-section">
                    <div className="circle">
                        <div className="circle-text">
                        </div>
                        <div className="inner-circle">
                            <i className='bi bi-play-fill'></i>
                        </div>
                    </div>

                    <div className="circle-image">
                        <img src={Reelpic} alt="" />
                    </div>
                </div>
            </div>
            <div className='HomePageContent2'>
                <h1>Ideas that stick, results that scale.</h1>
                <p>We team up with startups and established companies to craft identities and digital experience that resonate.</p>
            </div>

            <div className='HomePageContent3 container'>
                <div className='row g-3 justify-content-center mt-3'>
                    <div className='col-12 col-md-3'>
                        <div className='Homepage-cards'>
                            <h5>Enduring partnership rooted in creative trust and real outcomes.</h5>
                            <p>We prioritize client ambitions, creating work that looks exceptional and truely resonates with their brand.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-3'> <div className='Homepage-cards '>
                        <h5>24/7 priority channel.</h5>
                        <p>We offer priority support for urgent tasks with average response for critical issues.</p>
                    </div>
                    </div>
                    <div className='col-12 col-md-3'>
                        <div className='Homepage-cards '>
                            <h5>It takes just 20 minutes to launch your site optimized, live & ready to convert.</h5>
                            <p>We command attention, design striking sites, and ship products that convert audiences into customers</p>
                        </div>
                    </div>
                </div>
                <div className='row g-3 justify-content-center mt-3'>
                    <div className='col-12 col-md-3'>
                         <div className='Homepage-cards '>
                        <h5>Transparent process.</h5>
                        <p>We reasearch deeply and strategically plan to define the business core structure and all key elements of your project needs.</p>
                    </div>
                    </div>
                   <div className='col-12 col-md-3'>
                    <div className='Homepage-cards'>
                        <h5>Latest tools at your hands, fully integrated for instant use & deployment ready.</h5>
                        <p>Whether you're building a brand system, launching product, or running a campaign, we'll shape project that redefine you.</p>
                    </div>
                   </div>
                    <div className='col-12 col-md-3'>
                        <div className='Homepage-cards '>
                        <h5>Publish in minutes.</h5>
                        <p>Whether you're building a brand system, a product, or running a campaign, we'll shape projects that redefines you.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageContent