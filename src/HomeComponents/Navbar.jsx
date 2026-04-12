import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Menu from './Menu';
import SearchCard from './SearchCard'
import ContactAtHomecard from './ContactAtHomeCard';

function Navbar() {

    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState(false);
    const [contactAtHome, setContactAtHome] = useState(false);

    return (
        <>
            <div className='nav-content  d-flex justify-content-between m-0'>
                <div className='nav-logo d-block d-xl-flex align-items-center gap-5'>
                    <h3>Genzia</h3>
                    <div className="menu-links d-none d-xl-flex gap-5">
                        <div className="menu-item-lg">
                            <Link to="#">Home</Link>
                            <div className="custom-dropdown">
                                <Link to="#">Digital Agency</Link>
                                <Link to="#">Design Agency</Link>
                                <Link to="#">Modern Agency</Link>
                                <Link to="#">Creative Agency</Link>
                                <Link to="#">Arabic</Link>
                            </div>
                        </div>

                        <div className="menu-item-lg">
                            <Link to="#">Pages</Link>
                            <div className="custom-dropdown">
                                <Link to="#">About Us</Link>
                                <Link to="#">Our Team</Link>
                                <Link to="#">Work Process</Link>
                                <Link to="#">Pricing Plans</Link>
                                <Link to="#">Testimonials</Link>
                                <Link to="#">Help & FAQs</Link>
                            </div>
                        </div>

                        <div className="menu-item-lg">
                            <Link to="#">Services</Link>
                            <div className="custom-dropdown">
                                <Link to="#">Brand Strategy</Link>
                                <Link to="#">UI/UX Design</Link>
                                <Link to="#">Digital Strategy</Link>
                                <Link to="#">Social Media</Link>
                                <Link to="#">Web Development</Link>
                                <Link to="#">Product Design</Link>
                            </div>
                        </div>

                        <div className="menu-item-lg">
                            <Link to="#">Portfolio</Link>
                            <div className="custom-dropdown">
                                <Link to="#">Portfolio Standard</Link>
                                <Link to="#">Portfolio Grid</Link>
                                <Link to="#">Portfolio Masonry</Link>
                                <Link to="#">Portfolio Modern</Link>
                                <Link to="#">Portfolio Fullwidth</Link>
                                <Link to="#">Portfolio Details</Link>
                            </div>
                        </div>

                        <div className="menu-item-lg">
                            <Link to="#">Blog</Link>
                            <div className="custom-dropdown">
                                <Link to="#">Blog Grid</Link>
                                <Link to="#">Blog Standard</Link>
                                <Link to="#">Single Post</Link>
                            </div>
                        </div>

                        <div className="menu-item-lg">
                            <Link to="#">Shop</Link>
                            <div className="custom-dropdown">
                                <Link to="#">Shop Products</Link>
                                <Link to="#">Single Product</Link>
                                <Link to="#">Cart</Link>
                                <Link to="#">Checkout</Link>
                                <Link to="#">My Account</Link>
                                <Link to="#">Privacy Policy</Link>
                                <Link to="#">Refund and Returns Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nav-icons d-flex d-xl-none fs-4 m-2'>
                    <i className="bi bi-telephone"></i>
                    <i className="bi bi-search" onClick={() => setSearch(!search)} style={{ cursor: "pointer" }}></i>
                    <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={() => setOpen(!open)} style={{ cursor: "pointer" }}></i>
                </div>
                <div className='nav-icons d-none d-xl-block d-flex  fs-4 m-3 align-items-center'>
                    <i className="bi bi-telephone "></i> <span style={{ fontSize: "18px" }}> +91 9788855552</span>
                    <i className="bi bi-search p-4" onClick={() => setSearch(!search)} style={{ cursor: "pointer" }}></i>
                    <i className="bi bi-list" onClick={() => setContactAtHome(!contactAtHome)} style={{ cursor: "pointer" }}></i>
                </div>
                <Link to="/contact" className="menu-btn p-3 d-none d-xl-block"><span className="menu-btn-arrow" href=""><i className="bi bi-arrow-right p-2"></i></span> <span>Get in touch</span></Link>
            </div>
            {open && <Menu />}
            {search && <SearchCard close={() => setSearch(false)} />}
            {contactAtHome && <ContactAtHomecard close={()=> setContactAtHome(false)}/>}
        </>
    )
}

export default Navbar