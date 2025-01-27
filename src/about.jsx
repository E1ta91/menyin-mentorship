import React from 'react'
import './App.css'
import pic2 from './assets/images/pic2.jpg'
import pic6 from './assets/images/pic6.jpg'
import pic7 from './assets/images/pic7.jpg'
import pic8 from './assets/images/pic8.jpg'
import pic9 from './assets/images/pic9.jpg'
import { Link, useNavigate } from 'react-router-dom'



const About = () => {
    const navigate = useNavigate()
    return (
        <div id='about'>
            <div className='flex flex-col justify-center items-center text-center space-y-10 pt-[7rem]'>

                <span className='space-y-3'>
                    <p className='text-[#BDA9CF]'>Elevate Your Potential</p>
                    <h1 style={{ fontFamily: 'Playfair' }} className='text-5xl text-[#2F2C36]'>Mentorship: Bridging the <br /> Gap Between </h1>
                    <p className='text-[#868488]'>Unlock Your Full Potential with the Guidance of Experienced Mentors <br /> Who Have Walked The Path Before You</p>
                </span>


                <button onClick={() => navigate('/choice')} className='text-[#FEFDFF] w-[14vw] h-[7vh] text-center  border bg-[#7149B9] rounded-full'>Start your Journey</button>

            </div>


            <div className='flex justify-center items-center space-x-16 pt-20'>
                <img className='rounded-3xl w-[300px]' src={pic6} alt="image" />

                <div className='space-y-4'>

                <div className='space-y-2'>
                    <h1 style={{ fontFamily: 'Playfair' }} className='text-4xl text-[322E37]'>Mentorship Matters</h1>
                    <p className='text-[#858285]'>Discover Transformative Mentorship Relationships <br /> That Empower You To Reach New Heights in Your <br /> Personal and Professional Development</p>
                </div>

                <div className='space-y-8 '>

                    <Link to={'/mentor'} className='flex space-x-6 border transform transition-transform hover:scale-105  shadow-gray-600  shadow-xl w-[32vw] h-[19vh] border-[#474647] rounded-2xl pt-4 pl-7'>

                        <img className="w-[7vw] h-[14vh] rounded-full object-cover" src={pic2} alt="img" />

                        <div className='space-y-1'>
                            <h1 className='text-[#474647] text-xl'>Mentors Wanted</h1>
                            <p className='text-[#8C8B8D] text-[0.9rem]'>Embark on a Fulfilling Mentorship <br /> Journey and Elevate your Growth</p>
                        </div>
                    </Link>

                    <Link to={'/profiles'}  className='flex transform transition-transform hover:scale-105 space-x-6 border shadow-lg shadow-gray-500 w-[32vw] h-[19vh] border-[#474647] rounded-2xl pt-4 pl-7'>

                        <img className="w-[7vw] h-[14vh] rounded-full object-cover" src={pic9} alt="img" />

                        <div  className='space-y-1'>
                            <h1 className='text-[#474647] text-xl'>Mentor Profiles</h1>
                            <p className='text-[#8C8B8D] text-[0.9rem]'>Unlock Your Full Potential with the Wisdom <br /> and Guidance of Experienced Mentors</p>
                        </div>
                    </Link>

                  
                </div>

                </div>

              
            </div>




            <div className='flex justify-center items-center space-x-16 pt-20'>
                

                <div className='space-y-4'>

                <div className='space-y-2'>
                    <h1 style={{ fontFamily: 'Playfair' }} className='text-4xl text-[322E37]'>Mentee Corner</h1>
                    <p className='text-[#858285]'>Elevate Your Journey with the Guidance of <br /> Seasoned Mentors Who Have Walked The Path <br />Before You and Are Comitted To Success</p>
                </div>

                <div className='space-y-8'>

                    <Link to={'/opportunities'} className='flex transform transition-transform hover:scale-105 space-x-6 border w-[32vw] h-[20vh] border-[#474647] rounded-2xl pt-4 pl-5  shadow-lg shadow-gray-500'>

                    
                        <img className="w-[7vw] h-[14vh] rounded-full object-cover" src={pic8} alt="img" />

                        <div className='space-y-1'>
                            <h1 className='text-[#474647] text-xl'>Mentee Opportunities</h1>
                            <p className='text-[#8C8B8D] text-[0.9rem]'>Discover The Transformative Power of <br /> Mentorship and Embark on a Journey of Sucess</p>
                        </div>

                    </Link>

                   

                    <div className='flex space-x-6 border w-[32vw]  shadow-lg shadow-gray-500 transform transition-transform hover:scale-105  h-[19vh] border-[#474647] rounded-2xl pt-4 pl-7'>
                        <img className="w-[7vw] h-[14vh] rounded-full object-cover" src={pic2} alt="img" />

                        <div className='space-y-1'>
                            <h1 className='text-[#474647] text-xl'>Mentee Spotlight</h1>
                            <p className='text-[#8C8B8D] text-[0.9rem]'>Unlock Your True Potential with the <br /> Invaluable Insights and Support</p>
                        </div>
                    </div>
                </div>

                </div>

                <img className='rounded-3xl w-[300px]' src={pic7} alt="image" />

              
            </div>
        </div>
    )
}

export default About