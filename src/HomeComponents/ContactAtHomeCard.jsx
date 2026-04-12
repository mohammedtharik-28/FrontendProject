import React from 'react'
import { Link } from "react-router-dom";

function ContactAtHomeCard({ close }) {
    return (
        <>
            <div className='ContactAtHome-content d-flex flex-column'>
                <div>
                    <i className='x-icon bi bi-x-lg' onClick={close}></i>
                </div>
                <div className='ContactAtHome-card1'>
                    <h1>You bring the vision, we make it inevitable!</h1>
                    <p>We design cohesive product ecosystem, craft brand narratives, optimise UX & performance, and deliever business growth</p>
                    <Link to="#" className="menu-btn"><span className="menu-btn-arrow"><i className="bi bi-arrow-right"></i></span> <span>Get started Now</span></Link>
                </div>
                <div className='ContactAtHome-card2 d-flex flex-column'>
                    <Link className="" style={{ fontSize: "16px" }}>Genzia.com</Link>
                    <Link className="" style={{ fontSize: "16px", fontWeight: "700" }}>+91 9788855512</Link>
                </div>
            </div>
        </>
    )
}

export default ContactAtHomeCard