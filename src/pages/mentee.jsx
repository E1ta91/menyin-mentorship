import React from 'react'
import bg3 from '../assets/images/bg3.avif'

const Mentee = () => {
    return (

        <div>
            <div style={{
                backgroundImage: `url(${bg3})`,
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                height: '100vh',
            }} >
                <div className="absolute inset-0 bg-black z-0 opacity-10 "></div>
            </div>

            <form action="" className='space-y-5 absolute bottom-[4rem] left-[400px]  pb-8 pl-4 bg-custom-gradient w-[37vw] rounded-xl shadow-2xl shadow-black ml-10 '>

                <h2 style={{ fontFamily: 'Playfair' }} className='text-2xl text-[#F9F6E6] '>Ready to Grow? Register to Find Your Mentor</h2>

                <div className='flex space-x-10'>

                    <div className="">
                        <label htmlFor='name' className="mb-3 block text-base font-medium text-[#BAD8B6]">
                            Full Name
                        </label>
                        <input type="name" name="fullname" id="fullname" placeholder="Full name" autoComplete='name' className="w-52 rounded-md border  border-[#585757] bg-white py-3 px-6   text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md" />
                    </div>

                    <div className="">
                        <label htmlFor='email' className="mb-3 block text-base font-medium text-[#BAD8B6]">
                            Email Address
                        </label>
                        <input type="text" name="email" id="email" placeholder="Email Address" autoComplete='email' className="w-56 rounded-md border  border-[#585757] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md" />
                    </div>

                </div>

                <div>
                    <div className="">
                        <label htmlFor='mentorship-field' className=" block text-base font-medium text-[#BAD8B6]">
                            Mentorship Area
                        </label>
                        <input type="text" name="mentorship-field" id="mentorship-field" placeholder="e.g., Technology, Marketing....." autoComplete='name' className="w-72 rounded-md border  border-[#585757] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md" />
                    </div>

                    <div className="">
                        <label for="career-goals" className=" block text-base font-medium text-[#BAD8B6]">Career Goals</label>
                        <input
                            id="career-goals"
                            name="careerGoals"
                            rows="4"
                            placeholder="Areas you need guidance in..."
                            className="w-72 rounded-md border  border-[#585757] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                        ></input>
                    </div>

                    <div className="">
                        <label for="skills" className=" block text-base font-medium text-[#BAD8B6]">Skills</label>
                        <input
                            id="skills"
                            name="skills"
                            rows="4"
                            placeholder="skills you need guidance in..."
                            className="w-72 rounded-md border  border-[#585757] bg-white py-3 px-6 text-base  text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                        ></input>
                    </div>
                </div>

                <button style={{ fontFamily: 'Playfair' }} className='border border-[#BAD8B6] text-white w-32 h-8 font-semibold hover:bg-[#DA498D] rounded-lg'>Submit</button>

            </form>

        </div>


    )
}

export default Mentee