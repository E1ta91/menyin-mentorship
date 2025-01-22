import React from 'react'
import bg6 from '../assets/images/bg-6.jpg'
import { Link } from 'react-router-dom'

const Choice = () => {
  return (
    <div style={{
        backgroundImage: `url(${bg6})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '100vh',
    }} >

        <div className='flex justify-center items-center space-x-20 pt-[18rem]'>

            <Link to={'/mentee'} style={{ fontFamily: 'Playfair' }} className='text-[#F9E6CF] text-2xl border bg-[#DA498D] w-[20rem] text-center h-12 rounded-lg pt-1 font-semibold transform transition-transform hover:scale-105' >Mentee Registration</Link>

            <Link to={'/mentor'} style={{ fontFamily: 'Playfair' }} className='text-[#F9E6CF] text-2xl border bg-[#DA498D] w-[20rem] text-center h-12 rounded-lg pt-1 font-semibold transform transition-transform hover:scale-105'>Mentor Registration</Link>

        </div>

    </div>
  )
}

export default Choice