import React from 'react'
import menyin from './assets/images/menyin.png'
import { Copyright } from 'lucide-react'
import seguah from './assets/images/seguah.png'
import lanyo from './assets/images/lanyo.png'
import lf from './assets/images/lf.png'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div id='footer' className='bg-white h-[60vh] flex flex-col  '>

<div className="relative overflow-hidden h-32">
  <div className="flex justify-start animate-slideRight space-x-10 h-full">
    <img className="w-[100px] object-contain" src={seguah} alt="logo" />
    <img className="w-[200px] object-contain" src={lanyo} alt="logo" />
    <img className="w-[160px] object-contain" src={lf} alt="logo" />
  </div>
</div>


      <div className='space-x-24 mx-[8rem] flex pt-8'>
        
      <div className='flex flex-col space-y-3 -mt-28'>
        <img className='w-[200px]' src={menyin} alt="" />

        <div className="flex pl-9 text-[#615F61] space-x-2">
          <span>© 2025 Menyin. <br /> All rights reserved</span>
        </div>
      </div>


      <div className=' flex  space-x-52 '>

        <div className='space-y-3'>
          <h1 className='text-[#615F61] font-semibold'>Quick Links</h1>

          <div className=' flex flex-col space-y-1 text-[#615F61]'>
            <a href="#home"> Home</a>
            <a href="#about"> About </a>
            <a href="#mentors"> Mentors </a>
            <a href=""> Donate </a>
          </div>

        </div>

        <div className='space-y-3'>
          <h1 className='text-[#615F61] font-semibold'>Resources</h1>

          <div className=' flex flex-col space-y-1 text-[#615F61]'>
            <a href=""> FAQ's</a>
            <a href=""> Blog </a>
             <Link to={'register'} >Apply</Link>
          </div>

        </div>

        <div className='space-y-3'>
          <h1 className='text-[#615F61] font-semibold'>Stay Connected</h1>

          <div className=' flex flex-col space-y-1 text-[#615F61]'>
            <a href=""> Facebook</a>
            <a href=""> Twitter </a>
            <a href=""> LinkedIn </a>
            <a href=""> Instagram </a>
          </div>

        </div>
      </div>

      </div>

      



    </div>
  )
}

export default Footer