import React from 'react'
import './Contact.css'
import ContactFrontPage from './ContactFrontPage'
import NavbarUp from '../HomeComponents/NavbarUp'
import Navbar from '../HomeComponents/Navbar'
import LetsTalkCard from './LetsTalkCard'
import MapLocation from './MapLocation'
import ContactEndCard from './ContactEndCard'


function Contact() {
  return (
    <>
    <NavbarUp/>
    <Navbar/>
    <ContactFrontPage/>
    <LetsTalkCard/>
    <MapLocation/>
    <ContactEndCard/>
    </>
  )
}

export default Contact