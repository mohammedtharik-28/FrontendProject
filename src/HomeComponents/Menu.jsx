import React from 'react'

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

        <button className="menu-btn"><a className="menu-btn-arrow" href=""><i className="bi bi-arrow-right"></i></a> Get in touch</button>
      </div>
    </div>
  )
}

export default Menu