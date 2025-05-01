import React from 'react'
import menyin from './assets/images/menyin.png'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  
  return (
    <div id='footer' className='bg-white md:h-[40vh] h-auto lg:h-[45vh]  space-y-8 mt-8 flex flex-col overflow-hidden '>
      
     <div className="">
     <h1 className="  animate-slideRight text-2xl text-[#846FA6] ">
        Powered By Seguah Africa Initiative
        </h1>
     </div>
       
   
      
      <div className='flex flex-col md:flex-row justify-center lg:flex-row lg:justify-center md:justify-center items-center space-y-6 md:space-y-0 md:space-x-16 lg:space-x-44  '>
        
        <div className='flex flex-col items-center md:items-start space-y-2 -mt-6 md:-mt-28'>
          
          <img className='w-40 md:w-32 lg:w-56' src={menyin} alt="logo" />

          <div className=" text-[#615F61] lg:pl-10">
            <span>© 2025 Menyin. <br /> All rights reserved</span>
          </div>

        </div>
        
        <div className='flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16 lg:space-x-44'>

          <div className='space-y-3 text-center md:text-left'>
            <h1 className='text-[#615F61] font-semibold'>Quick Links</h1>
            <div className='flex flex-col space-y-2 text-[#615F61]'>
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#mentors">E-Circle</a>
              <a href="#donate">Donate</a>
            </div>
          </div>

          <div className='space-y-3 text-center md:text-left'>
            <h1 className='text-[#615F61] font-semibold'>Resources</h1>
            <div className='flex flex-col space-y-2 text-[#615F61]'>
              <a href="#faqs">FAQ's</a>
              <a href="#blog">Blog</a>
              <Link to='/register'>Apply</Link>
            </div>
          </div>

          <div className='space-y-3 text-center md:text-left'>
            <h1 className='text-[#615F61] font-semibold'>Stay Connected</h1>
            <div className='flex flex-col space-y-2 text-[#615F61]'>
              <a href="#">Facebook</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
            </div>
          </div>
          
        </div>
        
      </div>

    </div>
  )
}

export default Footer