import React from 'react'
import './Home.css'
import NavbarUp from './NavbarUp';
import Navbar from './Navbar';
import Frontcover from './Frontcover';
import AboutUs from './AboutUs';
import ContactEndCard from '../ContactComponents/ContactEndCard';


function Home() {
  return (
    <>
        <NavbarUp/>
        <Navbar/>
        <Frontcover/>
        <AboutUs/>
        <ContactEndCard/>
    </>
  )
}

export default Home;