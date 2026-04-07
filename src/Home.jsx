import React from 'react'
import './Home.css'
import NavbarUp from './HomeComponents/NavbarUp';
import Navbar from './HomeComponents/Navbar';
import Frontcover from './HomeComponents/Frontcover';


function Home() {
  return (
    <>
        <NavbarUp/>
        <Navbar/>
        <Frontcover/>
    </>
  )
}

export default Home;