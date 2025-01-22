import React from 'react'
import pic2 from './assets/images/pic2.jpg'
import pic5 from './assets/images/pic5.jpg'
import { useNavigate } from 'react-router-dom'

const Started = () => {
    const navigate = useNavigate()
    return (
        <div className='bg-[#E0D5EF] w-full h-[25vh]  flex justify-center items-center space-x-20'>

            <div className='flex space-x-6'>
                <img className="w-[7vw] h-[15vh] rounded-full object-cover"src={pic2} alt="img"/>

                <div className='space-y-3'>
                    <h1 className='text-black text-xl'>Mentorship Journey</h1>
                    <p className='text-[#797479]'>Unlock Your Potential with <br /> Experienced Mentors</p>
                </div>
            </div>

            <div className='flex space-x-6'>
                <img className="w-[7vw] h-[15vh] rounded-full object-cover" src={pic5} alt="img" />

                <div className='space-y-3'>
                    <h1 className='text-black text-xl'>Discover Your Path</h1>
                    <p className='text-[#797479]'>Explore Diverse Mentorship <br /> Opportunities and Find the Right Path</p>
                </div>

            </div>

            <div>
                <button onClick={() => navigate('/choice')} className='border bg-white text-center w-[13vw] h-[7vh]  font-semibold rounded-full text-[#5B5062]'>Get Started</button>
            </div>


        </div>
    )
}

export default Started