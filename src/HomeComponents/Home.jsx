import React from 'react'
import './Home.css'
import NavbarUp from './NavbarUp';
import Navbar from './Navbar';
import Frontcover from './Frontcover';
import AboutUs from './AboutUs';


function Home() {
  return (
    <>
        <NavbarUp/>
        <Navbar/>
        <Frontcover/>
        <AboutUs/>
    </>
  )
}

export default Home;