import React from 'react'
import './App.css'
import pic1 from './assets/images/pic1.jpg'
import Started from './started'
import { useNavigate } from 'react-router-dom'
import { Slide } from 'react-swift-reveal'

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div id='home'>
      <div className='flex justify-center items-center space-x-[8rem] pl-[5rem] pt-[10rem]'>

        <Slide left duration={800} delay={300}>

        <div className='space-y-10'>

          <span >
            <p className='text-[#848484]'>Connect with Mentors</p>
            <h1 style={{ fontFamily: 'Playfair' }} className='text-6xl'>Empower Your <br /> Future through <br /> Mentorship </h1>
          </span>

          <button className='border w-[6rem] text-[#DED9F1] h-[2.5rem] bg-[#8064C1] text-center flex justify-center items-center rounded-full' onClick={() => navigate("/choice")}  >Join now</button>


        </div>
        </Slide>

        <Slide right duration={800} delay={300}>
        <img className='rounded-t-3xl w-[37vw]' src={pic1} alt="img" />
        </Slide>

        <div>

        </div>
      </div>

      <Started />
    </div>

  )
}

export default Hero