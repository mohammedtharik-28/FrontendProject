import React from 'react'
import './Contact.css'
import ContactFrontPage from './ContactFrontPage'
import NavbarUp from '../HomeComponents/NavbarUp'
import Navbar from '../HomeComponents/Navbar'
import LetsTalkCard from './LetsTalkCard'


function Contact() {
  return (
    <>
    <NavbarUp/>
    <Navbar/>
    <ContactFrontPage/>
    <LetsTalkCard/>
    </>
  )
}

export default Contact