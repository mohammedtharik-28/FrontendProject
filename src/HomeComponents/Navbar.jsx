import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Menu from './Menu';
import SearchCard from './SearchCard'

function Navbar() {

    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(false);

    return (
        <>
            <div className='nav-content  d-flex justify-content-between m-0'>
                <div className='nav-logo d-block d-xl-flex align-items-center gap-5'>
                    <h3>Genzia</h3>
                    <div className="menu-links d-none d-xl-flex gap-5">
                        <Link>Home</Link>
                        <Link>Pages</Link>
                        <Link>Services</Link>
                        <Link>Portfolio</Link>
                        <Link>Blog</Link>
                        <Link>Shop</Link>
                    </div>
                </div>
                <div className='nav-icons d-flex d-xl-none fs-4 m-2'>
                    <i className="bi bi-telephone"></i>
                    <i className="bi bi-search" onClick={() => setSearch(!search)} style={{cursor:"pointer"}}></i>
                    <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}></i>
                </div>
                <div className='nav-icons d-none d-xl-block d-flex  fs-4 m-3 align-items-center'>
                    <i className="bi bi-telephone "></i> <span style={{fontSize:"18px"}}> +91 9788855552</span>
                    <i className="bi bi-search p-4" onClick={() => setSearch(!search)} style={{cursor:"pointer"}}></i>
                    <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}></i>
                </div>
                <Link to="/contact" className="menu-btn p-3 d-none d-xl-block"><span className="menu-btn-arrow" href=""><i className="bi bi-arrow-right p-2"></i></span> <span>Get in touch</span></Link>
            </div>
            {open && <Menu />}
            {search && <SearchCard close={() => setSearch(false)} />}
        </>
    )
}

export default Navbar