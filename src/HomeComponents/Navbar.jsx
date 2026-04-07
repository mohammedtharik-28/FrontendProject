import React, { useState } from 'react'
import Menu from './Menu';

function Navbar() {

    const [open, setOpen] = useState(false);

  return (
    <>
    <div className='nav-content d-flex justify-content-between m-0'>
        <div className='nav-logo'>
            <h3>Genzia</h3>
        </div>
        <div className='nav-icons d-flex fs-4 m-2'>
            <i className="bi bi-telephone"></i>
            <i className="bi bi-search"></i>
            <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={()=> setOpen(!open)} style={{cursor:"pointer"}}></i>
        </div>
    </div>
    {open && <Menu/>}
    </>
  )
}

export default Navbar