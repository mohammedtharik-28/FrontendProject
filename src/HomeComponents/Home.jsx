import React from 'react'
import './Home.css'
import NavbarUp from './NavbarUp';
import Navbar from './Navbar';
import Frontcover from './Frontcover';
import AboutUs from './AboutUs';
import ContactEndCard from '../ContactComponents/ContactEndCard';
import HomePageContent from './HomePageContent';


function Home() {
  return (
    <>
        <NavbarUp/>
        <Navbar/>
        <Frontcover/>
        <AboutUs/>
        <HomePageContent/>
        <ContactEndCard/>
    </>
  )
}

export default Home;