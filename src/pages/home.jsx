import React from 'react'
import Navbar from '../navbar'
import Hero from '../hero'
import About from '../about'
import Mentor from '../mentor'
import Footer from '../footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Mentor/>
        <Footer/>
    </div>
  )
}

export default Home