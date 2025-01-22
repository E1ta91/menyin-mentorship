import React from 'react'
import menyin from './assets/images/menyin.png'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div>

        <div className='flex justify-center bg-white w-full h-[24vh] fixed items-center space-x-[25rem] -mt-9 pl-[4rem] z-40'>

           <img className='w-[190px] -mt-7 ' src={menyin} alt="" />

            <nav>
                <ul className='flex space-x-12 pt-9 text-[#918F90]'>
                   <a href="#home"> <li>Home</li> </a> 
                    <a href="#about"> <li>About</li> </a>
                    <a href="#mentors"><li>Mentors</li></a>
                    <Link to={'/contact'}><li>Contact</li></Link>
                    <button onClick={() => navigate("/choice")}  className='border w-[4rem] text-[#DED9F1] h-[2rem] bg-[#8064C1] text-center rounded-full'>Join</button>
                    <li>Donate</li>
                </ul>
            </nav>
        </div>

    </div>
  )
}

export default Navbar