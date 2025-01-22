import React from 'react'
import pic10 from './assets/images/pic10.avif'
import pic12 from './assets/images/pic12.png'
import { LinkedinIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import portia from './assets/images/portia.jpg'
import thomas from './assets/images/thomas.jpg'
import uriah from './assets/images/uriah.jpg'

const Mentor = () => {
    const navigate = useNavigate()
    return (
        <div id='mentors' className='pt-16' >

            <div className='bg-[#DFD7EE] h-[90vh] flex flex-col justify-center items-center  space-y-3'>
                <p className='pt-[2rem] text-[#A86EC8]'>Mentorship Matters</p>

                <h1 style={{ fontFamily: 'Playfair' }} className='text-4xl font-semibold text-[#382F57]'>Join Our Community</h1>

                <p className='text-center text-[#3C3A4B]'>Elevate Your Professional Growth with The Guidance of Experienced Mentors <br /> Who Have Navigated The Challenges You Face and Are Committed to Your Success</p>

                <div className='flex  space-x-10 pt-[1rem]'>

                    <div className='space-y-2 border bg-white w-[14rem] h-[18rem] flex flex-col justify-center items-center  rounded-xl'>

                        <img className='rounded-xl w-[180px] h-[11rem] text-center' src={uriah} alt="img" />


                        <div className='flex flex-col space-y-4 '>

                            <h1 className='text-[#A86EC8] text-xl font-semibold'>C.E.O</h1>

                            <div className='flex space-x-14'>
                                <p className='text-[#4E445B]' >Uriah Karikari</p>

                                < LinkedinIcon className='text-[#F9BC6A]' />
                            </div>

                        </div>

                    </div>

                    <div className='space-y-2 border bg-white w-[14rem] h-[18rem] flex flex-col justify-center items-center  rounded-xl'>

                        <img className='rounded-xl w-[180px] h-[11rem] text-center' src={portia} alt="img" />



                        <div className='flex flex-col space-y-4 '>

                            <h1 className='text-[#382F57]  text-xl font-semibold'>Coordinator</h1>

                            <div className='flex space-x-14'>
                                <p className='text-[#4E445B]' >Portia Alanyo</p>

                                < LinkedinIcon className='text-[#F9BC6A]' />
                            </div>

                        </div>

                    </div>

                    <div className='space-y-2 border bg-white w-[14rem] h-[18rem] flex flex-col justify-center items-center  rounded-xl'>

                        <img className='rounded-xl w-[180px] h-[11rem] text-center' src={thomas} alt="img" />



                        <div className='flex flex-col space-y-4 '>

                            <h1 className='text-[#A86EC8] text-xl font-semibold'>Relations officer</h1>

                            <div className='flex space-x-14'>
                                <p className='text-[#4E445B]' >Thomas Gyimah</p>

                                < LinkedinIcon className='text-[#F9BC6A]' />
                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div className='bg-custom-gradient h-[60vh]'>

                <div className='flex flex-col justify-center items-center text-center space-y-10 pt-14'>

                    <span className='space-y-3'>
                        <p className='text-[#DDD0E4]'>About our Mentorship</p>

                        <h1 style={{ fontFamily: 'Playfair' }} className='text-5xl pt-4 text-[#FEFDFE]'>Empowering Connections </h1>

                        <p className='text-[#DFD8E6] pt-2'>Discover the Transformative Power of Mentorship and Unlock Your Full Potential with the <br /> Guidance of Seasoned Experts Who Have Walked the Path Before You</p>
                    </span>


                    <button className='text-[#97929A] w-[10vw] h-[7vh] text-center font-semibold  border bg-[#FFFFFF] rounded-full'>Get Involved</button>

                </div>

            </div>



            <div className='bg-[#E0D8EF] flex flex-col  h-[100vh] space-y-10  justify-center items-center'>

                <div className='text-center space-y-3'>
                    <h1 style={{ fontFamily: 'Playfair' }} className='text-4xl  text-[#0C0A0C]'>Transformative Mentorship </h1>

                    <p className='text-[#443D47]  '>Embark on a Journey of Personal Growth with the Guidance of Experienced  Mentors  <br /> Who Understand the Challenges You face and Are Committed to</p>
                </div>

                <div>
                    <div className='flex  space-x-16 '>
                        <img className="w-[35vw] " src={pic12} alt="img" />

                        <div className='space-y-4 flex flex-col pt-10'>

                            <div className='space-y-2'>

                            <h1 className='text-[#1E1A20] text-xl'>Mentors Bios</h1>
                            <p className='text-[#3F3945] text-[0.9rem] space-y-2 leading-loose'>Unlock Your True Potential and Accelerate Your <br/> Personal and Professional Development with the <br /> Invaluable Insights and Support of Experienced <br /> Mentors Who Have Navigated the Challenges You <br /> Faced And Are Dedicated to Empowering Your Success</p>

                            </div>
                           
                            <button onClick={() => navigate("/mentee")} className='border w-[10vw] h-[7vh] rounded-full text-center text-[#F4E9F8] font-semibold bg-[#6B3EB7]'>Apply Now</button>
                        </div>
                       
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Mentor