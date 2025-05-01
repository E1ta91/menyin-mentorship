import React, { useState } from 'react'
import pic12 from './assets/images/pic12.png'
import { useNavigate } from 'react-router-dom'
import EmpathyCircle from './components/empathyCircle'


const Mentor = () => {
    const navigate = useNavigate()
    const [isEmpathyModalOpen, setIsEmpathyModalOpen] = useState(false);

    const handleOpenEmpathyModal = () => {
        setIsEmpathyModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsEmpathyModalOpen(false);
       
    };

    return (
        <div id='mentors' className='pt-16' >

            <div className='bg-[#DFD7EE] flex flex-col justify-center items-center space-y-6 py-10 px-4 md:px-8 lg:px-12'>
                <p className='text-[#A86EC8] text-base md:text-lg'>Mentorship Matters</p>
                <h1 style={{ fontFamily: 'Playfair' }} className='text-3xl md:text-4xl font-semibold text-[#382F57]'>Join Our Empathy Circle</h1>
                <p className='text-center text-[#3C3A4B] text-sm md:text-base lg:text-lg'>
                A Safe, Non-Judgmental Space.  The Empathy Circle is a warm and welcoming space where individuals can freely share their thoughts, experiences, and emotions.  It's about listening, healing,  and connection— because sometimes, all we really need is to be heard.
                </p>


                <button onClick={handleOpenEmpathyModal} className='border rounded-md h-12 w-36 text-white font-semibold bg-[#6B3EB7]'>Join the Circle</button>
                <EmpathyCircle  isOpen={isEmpathyModalOpen} onClose={handleCloseModal}/>
            </div>


            <div className='bg-custom-gradient h-[60vh] md:h-[65vh] lg:h-[60vh]  flex flex-col justify-center items-center  '>
                <div className='flex flex-col md:pb-8 justify-center items-center text-center space-y-6 md:space-y-8 pt-4 md:pt-14'>
                    <span className='space-y-3'>
                        <p className='text-[#DDD0E4] text-base md:text-lg'>About our Mentorship</p>
                        <h1 style={{ fontFamily: 'Playfair' }} className='text-3xl md:text-5xl pt-2 md:pt-4 text-[#FEFDFE]'>Empowering Connections</h1>
                        <p className='text-[#DFD8E6] text-sm md:text-base pt-2'>
                            Discover the Transformative Power of Mentorship and Unlock Your Full Potential with the <br className="hidden md:block" />
                            Guidance of Seasoned Experts Who Have Walked the Path Before You
                        </p>
                    </span>
                    <button className='text-[#97929A] w-40 md:w-[17vw] h-12 md:h-[7vh] text-center font-semibold border bg-[#FFFFFF] rounded-full'>Get Involved</button>
                </div>
            </div>



            <div className='bg-[#E0D8EF] flex flex-col h-auto md:h-[100vh] justify-center items-center py-10 px-4 md:px-8 lg:px-12 space-y-6 md:space-y-10 lg:space-y-12'>

                <div className='text-center space-y-3 md:space-y-4 lg:space-y-5'>
                    <h1 style={{ fontFamily: 'Playfair' }} className='text-3xl md:text-4xl lg:text-5xl text-[#0C0A0C]'>Transformative Mentorship</h1>
                    <p className='text-[#443D47] text-sm md:text-base lg:text-lg'>
                        Embark on a Journey of Personal Growth with the Guidance of Experienced Mentors <br className="hidden md:block" />
                        Who Understand the Challenges You Face and Are Committed to Your Success
                    </p>
                </div>

                <div className='flex flex-col md:flex-row lg:mx-24 md:space-x-7 lg:flex-row justify-center items-center space-y-6 lg:space-y-0 lg:space-x-16'>

                    <img className="w-full md:w-[380px] lg:w-[35vw]" src={pic12} alt="img" />

                    <div className='space-y-4 flex flex-col pt-6 md:pb-9 lg:pb-0'>
                        <div className='space-y-2 md:space-y-3 lg:space-y-4'>
                            <h1 className='text-[#1E1A20] text-lg md:text-xl lg:text-2xl'>Mentors Bios</h1>
                            <p className='text-[#3F3945] text-sm md:text-sm lg:text-base '>
                                Unlock Your True Potential and Accelerate Your Personal and Professional Development with the Invaluable Insights and Support of Experienced Mentors Who Have Navigated the Challenges You Faced And Are Dedicated to Empowering Your Success
                            </p>
                        </div>
                        <button onClick={() => navigate("/mentee")} className='border w-40 md:w-[14vw] lg:w-44 h-12 md:h-[7vh] lg:h-12 rounded-full text-center text-[#F4E9F8] font-semibold bg-[#6B3EB7]'>Apply Now</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Mentor