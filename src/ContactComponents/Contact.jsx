import React from 'react'
import './Contact.css'
import ContactFrontPage from './ContactFrontPage'
import NavbarUp from '../HomeComponents/NavbarUp'
import Navbar from '../HomeComponents/Navbar'
import LetsTalkCard from './LetsTalkCard'
import ContactEndCard from './ContactEndCard'
import QuestionCard from './QuestionCard'


function Contact() {
  return (
    <>
    <NavbarUp/>
    <Navbar/>
    <ContactFrontPage/>
    <LetsTalkCard/>
    <QuestionCard/>
    <ContactEndCard/>
    </>
  )
}

export default Contact