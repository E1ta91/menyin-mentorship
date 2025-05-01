import React from 'react';
import './App.css';
import pic1 from './assets/images/pic1.jpg';
import Started from './started';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div id="home" className="overflow-hidden w-full min-h-screen flex flex-col items-center justify-center">

    <div className="flex flex-col pt-[2rem] md:pt-[5rem] lg:flex-row md:flex-row justify-center items-center lg:space-x-[8rem] lg:mx-[2rem] lg:pt-[10rem] xl:pt-[11rem]  md:space-x-10 space-y-6 lg:space-y-0 md:space-y-0 max-w-screen-xl mx-auto px-6 lg:px-16 xl:px-20">
  
      <motion.div
        initial={{ x: -1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center lg:items-start text-center lg:text-left md:text-left"
      >
        <span className="space-y-2">
          <p className="text-[#848484] text-lg lg:text-lg md:text-lg xl:text-lg ">
            Connect with Mentors
          </p>
          <h1 style={{ fontFamily: "Playfair" }} className="text-3xl lg:text-4xl md:text-4xl xl:text-5xl ">
            Empower Your <br /> Future through <br /> Mentorship
          </h1>
        </span>
  
        <button
          className="border w-[10rem] md:w-[8rem] lg:w-[7rem] xl:w-[8rem] 2xl:w-[9rem] text-[#DED9F1] h-[3rem] md:h-[2.8rem] lg:h-[2.5rem] xl:h-[2.7rem] bg-[#8064C1] text-center flex justify-center items-center mx-auto lg:mx-0 md:mx-0 rounded-full mt-6"
          onClick={() => navigate("/choice")}
        >
          Join now
        </button>
      </motion.div>
  
      <motion.div
        initial={{ x: 1000 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center lg:justify-end"
      >
        <img
          className="rounded-t-3xl w-[90vw] md:w-[55vw] lg:w-[40vw] xl:w-[60vw] 2xl:w-[35vw] max-w-[503px]"
          src={pic1}
          alt="img"
        />
      </motion.div>
  
    </div>
  
    <Started />
  </div>
  
  );
};

export default Hero;
