import React from 'react'
import bg9 from '../assets/images/bg9.jpeg'
import K from '../constant'
import { Link } from 'react-router-dom'

const Opportunity = () => {
    return (
        <div>

          <div className='flex justify-center items-center  bg-white opacity-95  w-[100vw] h-[12vh] fixed z-20'>
          <nav  >
                <ul style={{ fontFamily: 'Playfair' }} className='text-[#726f71] flex space-x-9 text-xl '>
                    <a href="#home"><li className='hover:underline hover:scale-105" hover:text-[#ba45be]'>Home</li></a>
                    <a href="#internship"><li className='hover:underline hover:scale-105" hover:text-[#ba45be]'> Internships</li></a>
                    <a href="#workshop"><li className='hover:underline hover:scale-105" hover:text-[#ba45be]'> Workshop and Serminars </li></a>
                </ul>
            </nav>
          </div>
           

            <div id='home'>
                <div className="relative flex justify-center pt-36 items-center  text-center overflow-x-hidden"
                    style={{
                        backgroundImage: `url(${bg9})`,
                        backgroundSize: 'cover',
                        backgroundAttachment: 'fixed',
                        height: '100vh',
                    }}>
                    <div className="absolute inset-0 bg-gray-700 opacity-50 z-0"></div>
                </div>

                <div className='flex flex-col space-y-7 absolute bottom-[15rem] left-[280px] justify-center items-center z-10'>
                    <h1 style={{ fontFamily: 'Playfair' }} className='text-white text-2xl  text-center   '>Discover a world of opportunities designed to empower mentees through internships, <br />  and workshops and serminars .</h1>

                    <p style={{ fontFamily: 'Playfair' }} className='text-4xl text-center font-extrabold text-white '> Welcome to Mentees Page</p>
                </div>
            </div>

            <div className='pt-16' id='internship'>
                <div className='space-y-3'>
                    <h1 style={{ fontFamily: 'Playfair' }} className='text-center text-[#382F57] text-4xl pt-10'>Internship Opportunities</h1>
                    <p className='text-center text-[#858285] '>Gain practical experience and industry insights  through our curated  internship programs <br /> that match your career aspirations.</p>
                </div>



                <div className="grid grid-cols-3 m-20 pl-10">
                    {
                        K.INTERNSHIP.map((internship, index) => {
                            return (
                                <div className="space-y-3 bg-white w-[25vw] shadow-2xl shadow-gray-600 rounded-xl p-5" key={index}>
                                    <img
                                        className="w-full h-[200px] object-cover rounded-xl"
                                        src={internship.pic}
                                        alt="img"
                                    />
                                    <h3 className="text-lg text-[#933dc2] font-semibold">{internship.title}</h3>
                                    <p className="text-[#868488]">{internship.about}</p>
                                    <p className="text-blue-500 underline">
                                        <a href="">{internship.link}</a>
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>




            <div id='workshop' className='bg-[#E0D8EF] w-full h-[110vh] pt-16'>

                <div>
                <h1 style={{ fontFamily: 'Playfair' }} className='text-[#382F57] text-3xl text-center pt-5 '>Empower Your Future: Workshops & Seminars</h1>
                </div>

                <div className="grid grid-cols-3 mx-24 pt-14 ">
                    {
                        K.WORKSHOP.map((workshop, index) => {
                            return (
                                <div className=" space-y-3 bg-white w-[25vw] shadow-2xl shadow-gray-600 rounded-xl p-5" key={index}>
                                    <img
                                        className="w-full h-[200px] object-cover rounded-xl"
                                        src={workshop.img}
                                        alt="img"
                                    />

                                    <div className='space-y-3'>
                                    <h3 className="text-lg text-[#933dc2] font-semibold">{workshop.name}</h3>
                                    <p className="text-[#868488]">{workshop.about}</p>
                                    <p className="text-blue-500 underline">
                                       <a href="">{workshop.link}</a> 
                                    </p>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
                    
            </div>



        </div>
    )
}

export default Opportunity