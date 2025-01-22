import React from 'react'
import bg3 from '../assets/images/bg3.avif'
import contact from '../assets/images/contacts.jpg'
import { MapPin, Phone, User } from 'lucide-react'
import { Slide } from 'react-swift-reveal'


const Contact = () => {

  return (


    <div className=' space-y-16  h-[100vh]'
      style={{
        backgroundImage: `url(${bg3})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed',
        height: '100vh',
      }} >



      <h1 style={{ fontFamily: 'Playfair' }} className='text-4xl text-center' > Get In Touch</h1>

      <Slide left duration={800} delay={100}>
        <div className="flex w-[80vw] h-[80vh] mx-32  shadow-xl shadow-gray-500">

          {/* Form Section */}
          <div className="flex w-1/2 justify-center items-center   ">

            <div className="w-full  ">

              <form  className="space-y-5 pb-9 pl-4  bg-[#8874AB] ">
                <h2
                  style={{ fontFamily: 'Playfair' }}
                  className="text-2xl pt-5 text-[#F9F6E6]"
                >
                  Contact Our Team
                </h2>
                <div className="flex space-x-10">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-base font-medium text-[#BAD8B6]"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full name"
                      autoComplete="name"
                      className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-base font-medium text-[#BAD8B6]"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      autoComplete="email"
                      className="w-full rounded-md border border-[#585757] bg-white py-3 px-6 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-3 block text-base font-medium text-[#BAD8B6]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone number"
                    autoComplete="phone"
                    className="w-[37vw] rounded-md border border-[#585757] bg-white py-3 px-6 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-base font-medium text-[#BAD8B6]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Type here"
                    className="w-[37vw] rounded-md border border-[#585757] bg-white py-3 px-6 text-base text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                  ></textarea>
                </div>
                <button
                  style={{ fontFamily: 'Playfair' }}
                  className="border border-[#BAD8B6] text-white w-32 h-8 font-semibold hover:bg-[#DA498D] rounded-lg"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

          {/* Picture Section */}
          <div className="relative w-1/2 ">
            <img
              src={contact} // Replace `contact` with the actual image path or URL
              alt="Contact"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#FAC67A] opacity-40"></div>

            <div className='text-black flex flex-col space-y-14  absolute bottom-[7rem] left-[200px]'>

              <div className='space-y-2'>
                <div className='flex space-x-3'>
                  <MapPin className='text-[#A35C7A]' />
                  <h1 style={{ fontFamily: 'Playfair' }} className='text-xl' >  Address </h1>
                </div>

                <p>Ash Lane 110
                  London, UK</p>
              </div>

              <div className='space-y-2'>
                <div className='flex space-x-3'>
                  <Phone className='text-[#A35C7A]' />
                  <h1 style={{ fontFamily: 'Playfair' }} className=''>  Let's Talk</h1>
                </div>

                <p>0245296936</p>
              </div>

              <div className='space-y-2'>
                <div className='flex space-x-3'>
                  <User className='text-[#A35C7A]' />
                  <h1 style={{ fontFamily: 'Playfair' }} className=''>  General Support</h1>
                </div>

                <p>uriakari@gmail.com</p>
              </div>

            </div>
          </div>



        </div>
      </Slide>






    </div>
  )
}

export default Contact