import React from 'react'
import bg6 from '../assets/images/bg-6.jpg'
import { Link } from 'react-router-dom'

const Choice = () => {
  return (
    
      <div 
        style={{
          backgroundImage: `url(${bg6})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          height: '100vh',
        }} 
        className="flex flex-col justify-center items-center"
      >
        <div className='flex flex-col md:flex-row justify-center items-center md:space-x-10 lg:space-x-20 pt-7 md:pt-10 lg:pt-[1rem] space-y-16  md:space-y-0'>

          <Link 
            to={'/mentee'} 
            style={{ fontFamily: 'Playfair' }} 
            className='text-[#F9E6CF] text-xl md:text-2xl border bg-[#DA498D] w-64 md:w-72 lg:w-[20rem] xl:w-[27rem] xl:h-[4rem] text-center h-12 rounded-lg pt-1 xl:pt-3 xl:text-2xl font-semibold transform transition-transform hover:scale-105'
          >
            Mentee Registration
          </Link>
  
          <Link 
            to={'/mentor'} 
            style={{ fontFamily: 'Playfair' }} 
            className='text-[#F9E6CF] text-xl xl:w-[27rem] xl:text-2xl xl:h-[4rem] xl:pt-3 md:text-2xl border bg-[#DA498D] w-64 md:w-72 lg:w-[20rem] text-center h-12 rounded-lg pt-1 font-semibold transform transition-transform hover:scale-105'
          >
            Mentor Registration
          </Link>

        </div>

      </div>
  )
}

export default Choice