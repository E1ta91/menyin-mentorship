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



            <div className='flex flex-col justify-center items-center text-center space-y-10 pt-[6rem] md:pt-[6rem] lg:pt-[10rem] px-4 md:px-8 lg:px-12'>
                <span className='space-y-3'>
                    <p className='text-[#BDA9CF] text-base md:text-lg lg:text-xl'>Elevate Your Potential</p>
                    <h1 style={{ fontFamily: 'Playfair' }} className='text-3xl md:text-4xl lg:text-5xl text-[#2F2C36]'>
                        Mentorship: Bridging the <br /> Gap Between
                    </h1>
                    <p className='text-[#868488] text-sm md:text-base lg:text-lg'>
                        Unlock Your Full Potential with the Guidance of Experienced Mentors <br /> Who Have Walked The Path Before You
                    </p>
                </span>
                <button onClick={() => navigate('/choice')} className='text-[#FEFDFF] w-40 md:w-48 lg:w-56 h-12 md:h-14 lg:h-16 text-center border bg-[#7149B9] rounded-full'>
                    Start your Journey
                </button>
            </div>




            <div className='flex flex-col md:flex-row md:space-x-8 lg:flex justify-center items-center space-y-10  lg:space-x-16 pt-20 px-4 md:px-8 lg:px-12'>

                <img className='rounded-3xl w-[330px] md:w-[320px] lg:w-[350px]' src={pic6} alt="image" />

                <div className='space-y-4 pb-12'>

                    <div className='space-y-2 text-center lg:text-left'>
                        <h1 style={{ fontFamily: 'Playfair' }} className='text-3xl md:text-4xl md:text-left lg:text-3xl text-[#322E37]'>Mentorship Matters</h1>
                        <p className='text-[#858285] text-sm md:text-md md:text-left lg:text-base '>
                            Discover Transformative Mentorship Relationships <br />
                            That Empower You To Reach New Heights in Your <br />
                            Personal and Professional Development
                        </p>
                    </div>

                    <div className='space-y-8'>

                        <Link to={'/mentor'} className='flex space-x-5 md:flex-row md:space-x-3 border transform transition-transform hover:scale-105 shadow-gray-600 shadow-xl w-full md:w-full h-auto md:h-[7rem] lg:w-[26rem] lg:h-[8rem] lg:space-x-6 border-[#474647] rounded-2xl p-4 '>

                            <img className="w-20 h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full  " src={pic2} alt="img" />

                            <div className='space-y-1 text-center md:text-left'>
                                <h1 className='text-[#474647] text-lg md:text-xl text-left'>Become a Mentor</h1>
                                <p className='text-[#8C8B8D] text-sm md:text-[0.9rem] text-left'>Embark on a Fulfilling Mentorship <br /> Journey and Elevate your Growth</p>
                            </div>
                        </Link>

                        <Link  className='flex space-x-5 md:flex-row  md:space-x-6 border transform transition-transform hover:scale-105 shadow-gray-500 shadow-lg w-full md:w-full h-auto md:h-[8rem] border-[#474647] lg:w-[26rem] lg:h-[8rem] lg:space-x-6 rounded-2xl p-4 '>

                            <img className="w-20 h-20 md:w-20 md:h-20 rounded-full object-cover mx-auto md:mx-0" src={pic9} alt="img" />

                            <div className='space-y-1 text-center md:text-left'>
                                <h1 className='text-[#474647] text-lg md:text-xl text-left'>Mentor Profiles</h1>
                                <p className='text-[#8C8B8D] text-sm md:text-[0.9rem] text-left'>Unlock Your Full Potential with the Wisdom  and Guidance of Experienced Mentors</p>
                            </div>
                        </Link>

                    </div>

                </div>

            </div>




            <div className='flex flex-col md:flex-row md:space-x-8 lg:flex justify-center items-center space-y-10  lg:space-x-16 pt-20 px-4 md:px-8 lg:px-12'>


                <div className='space-y-4 pt-10 '>

                    <div className='space-y-2 text-center lg:text-left'>
                        <h1 style={{ fontFamily: 'Playfair' }} className='text-3xl md:text-4xl md:text-left lg:text-3xl text-[#322E37]'>Mentee Corner</h1>
                        <p className='text-[#858285] text-sm md:text-md md:text-left lg:text-base'>Elevate Your Journey with the Guidance of <br /> Seasoned Mentors Who Have Walked The Path <br />Before You and Are Comitted To Success</p>
                    </div>

                    <div className='space-y-8'>

                        <Link  className='flex space-x-5 md:flex-row md:space-x-3 border transform transition-transform hover:scale-105 shadow-gray-600 shadow-xl w-full md:w-full h-auto md:h-[8rem] lg:w-[26rem] lg:h-[8rem] lg:space-x-6 border-[#474647] rounded-2xl p-4 '>


                            <img className="w-20 h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 rounded-full  " src={pic8} alt="img" />

                            <div className='space-y-1 text-center md:text-left'>
                                <h1 className='text-[#474647] text-lg md:text-xl text-left'>Mentee Opportunities</h1>
                                <p className='text-[#8C8B8D] text-sm md:text-[0.9rem] text-left'>Discover The Transformative Power of  Mentorship and Embark on a Journey of Sucess</p>
                            </div>

                        </Link>



                        <div className='flex space-x-5 md:flex-row  md:space-x-6 border transform transition-transform hover:scale-105 shadow-gray-500 shadow-lg w-full md:w-full h-auto md:h-[8rem] border-[#474647] lg:w-[26rem] lg:h-[8rem] lg:space-x-6 rounded-2xl p-4 '>

                            <img className="w-20 h-20 md:w-20 md:h-20 rounded-full object-cover mx-auto md:mx-0" src={pic2} alt="img" />

                            <div  className='space-y-1 text-center md:text-left'>
                                <h1 className='text-[#474647] text-lg md:text-xl text-left'>Mentee Spotlight</h1>
                                <p className='text-[#8C8B8D] text-sm md:text-[0.9rem] text-left'>Unlock Your True Potential with the  Invaluable Insights and Support</p>
                            </div>

                        </div>

                    </div>

                </div>

                <img className='rounded-3xl w-[330px] md:w-[310px] lg:w-[350px]' src={pic7} alt="image" />


            </div>
        </div>
    )
}

export default About