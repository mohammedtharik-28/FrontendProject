import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Menu from './Menu';

function Navbar() {

    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='nav-content  d-flex justify-content-between m-0'>
                <div className='nav-logo d-block d-xl-flex align-items-center gap-5'>
                    <h3>Genzia</h3>
                    <div className="d-none d-xl-flex gap-5">
                        <span>Home</span>
                        <span>Pages</span>
                        <span>Services</span>
                        <span>Portfolio</span>
                        <span>Blog</span>
                        <span>Shop</span>
                    </div>
                </div>
                <div className='nav-icons d-flex d-xl-none fs-4 m-2'>
                    <i className="bi bi-telephone"></i>
                    <i className="bi bi-search"></i>
                    <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}></i>
                </div>
                <div className='nav-icons d-none d-xl-block d-flex  fs-4 m-3 align-items-center'>
                    <i className="bi bi-telephone "></i> <span style={{fontSize:"18px"}}> +91 9788855552</span>
                    <i className="bi bi-search p-4"></i>
                    <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}></i>
                </div>
                <Link to="/contact" className="menu-btn p-3 d-none d-xl-block"><span className="menu-btn-arrow" href=""><i className="bi bi-arrow-right p-2"></i></span> <span>Get in touch</span></Link>
            </div>
            {open && <Menu />}
        </>
    )
}

export default Navbar