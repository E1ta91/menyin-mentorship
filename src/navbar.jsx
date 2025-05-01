import React, { useState } from 'react'
import menyin from './assets/images/menyin.png'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Drawer from './components/drawer'
import DrawNav from './components/drawNav'


const Navbar = () => {

  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();



  return (
    <div>
      {/* larger screens */}
      <div className='lg:flex hidden justify-center bg-white w-full lg:pt-2   fixed  lg:z-40  h-[22vh] items-center xl:space-x-[25rem] lg:space-x-40  -mt-9 z-40'>

        <img className='w-[190px] -mt-4 ' src={menyin} alt="" />

        <nav>
          <ul className='flex space-x-12 pt-9 text-[#918F90]'>
            <a href="#home"> <li>Home</li> </a>
            <a href="#about"> <li>About</li> </a>
            {/* <a href="#mentors"><li>Mentors</li></a> */}
            <a href="#mentors"><li>E-Circle</li></a>
            <Link to={'/contact'}><li>Contact</li></Link>
            <button onClick={() => navigate("/choice")} className='border w-[4rem] text-[#DED9F1] h-[2rem] bg-[#8064C1] text-center rounded-full'>Join</button>
            <Link to={'/contact'}>  <li>Donate</li></Link>
          </ul>
        </nav>
      </div>

      {/* mobile screens */}

      <div className="lg:hidden flex justify-between items-center bg-black/50 text-white p-4 overflow-hidden">

      <img className='w-[100px]  ' src={menyin} alt="" />

        {/** onClick to open nav drawer */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-12 h-12" onClick={() => setIsOpen(!isOpen)}>
          <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>

        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
          <DrawNav href={"#home"} label={"Home"} setIsOpen={setIsOpen} />
          <DrawNav href={"#about"} label={"About"} setIsOpen={setIsOpen} />
          <DrawNav href={"#mentors"} label={"E-Circle"} setIsOpen={setIsOpen} />
          <DrawNav path={"/contact"} label={"Contact"} setIsOpen={setIsOpen} />
          <DrawNav path={"/choice"} label={"Join"} setIsOpen={setIsOpen} />
          <DrawNav path={""} label={"Donate"} setIsOpen={setIsOpen} />
        </Drawer>
      </div>



    </div>
  )
}

export default Navbar