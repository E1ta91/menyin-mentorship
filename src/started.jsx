import React from 'react';
import pic2 from './assets/images/pic2.jpg';
import pic5 from './assets/images/pic5.jpg';
import { useNavigate } from 'react-router-dom';

const Started = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-[#E0D5EF] w-full h-[18rem] lg:w-full lg:h-[23.8vh] md:h-[26vh] xl:h-[19vh] 2xl:h-[10vh]'>

        <div className='lg:mx-10 md:mx-5 mx-4  flex flex-col md:flex-row justify-center items-center md:space-x-10 lg:space-x-20 space-y-6 '>

        <div className='flex space-x-4 md:space-x-6 md:pt-5 pt-6 '>
        <img className="w-20 h-20 md:w-20 md:h-20 rounded-full object-cover" src={pic2} alt="img" />
        <div className='space-y-2 md:space-y-3'>
          <h1 className='text-black lg:text-lg md:text-sm md:font-semibold lg:font-normal'>Mentorship Journey</h1>
          <p className='text-[#797479] text-sm md:text-sm lg:text-[0.9rem]'>Unlock Your Potential with Experienced Mentors</p>
        </div>
      </div>

      <div className='flex space-x-4 md:space-x-6'>
        <img className="w-20 h-20 md:w-20 md:h-20 rounded-full object-cover" src={pic5} alt="img" />
        <div className='space-y-2 md:space-y-3'>
          <h1 className='text-black lg:text-lg md:text-sm md:font-semibold lg:font-normal'>Discover Your Path</h1>
          <p className='text-[#797479] text-sm md:text-sm lg:text-[0.9rem]'>Explore Diverse Mentorship  Opportunities and Find the Right Path</p>
        </div>
      </div>

      <div className='mt-4 '>
        <button onClick={() => navigate('/choice')} className='border bg-white  text-center w-32 md:w-[13vw] h-12 md:h-[7vh] font-semibold rounded-full text-[#5B5062] text-sm lg:text-sm'>Get Started</button>
      </div>
        </div>

      

    </div>
  );
};

export default Started;
