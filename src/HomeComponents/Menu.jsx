import React from 'react'
import { Link } from "react-router-dom";

function Menu() {
  return (
     <div className="menu-overlay">
      <div className="menu-box">
        <div className="menu-item"><span>Home</span><span>→</span> </div> 
        <div className="menu-item"><span>Pages </span><span>→</span></div>
        <div className="menu-item"> <span>Services</span><span>→</span></div> 
        <div className="menu-item"> <span>Portfolio</span><span>→</span></div>
        <div className="menu-item"> <span>Blog</span><span>→</span></div>
        <div className="menu-item"> <span>Shop</span><span>→</span></div>

        <Link to="/contact" className="menu-btn"><span className="menu-btn-arrow" href=""><i className="bi bi-arrow-right"></i></span> <span>Get in touch</span></Link>
      </div>
    </div>
  )
}

export default Menu