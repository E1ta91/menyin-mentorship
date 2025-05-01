import React, { useState } from 'react'
import bg9 from '../assets/images/bg9.jpeg'
import K from '../constant'

import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'

const Opportunity = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-white opacity-95 z-20 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 py-4">
          {/* Logo */}
          <h1 className="text-[#726f71] text-2xl font-bold">Mentees</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex">
            <ul className="text-[#726f71] flex space-x-8 text-lg">
              <a href="#home" className="hover:underline hover:scale-105 hover:text-[#ba45be]">Home</a>
              <a href="#internship" className="hover:underline hover:scale-105 hover:text-[#ba45be]">Internships</a>
              <a href="#workshop" className="hover:underline hover:scale-105 hover:text-[#ba45be]">Workshops & Seminars</a>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={28} className="text-[#726f71]" />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white py-4 shadow-md">
            <ul className="flex flex-col  text-center space-y-4">
              <a href="#home" className="text-lg text-[#726f71] hover:text-[#ba45be]" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#internship" className="text-lg text-[#726f71] hover:text-[#ba45be]" onClick={() => setMenuOpen(false)}>Internships</a>
              <a href="#workshop" className="text-lg text-[#726f71] hover:text-[#ba45be]" onClick={() => setMenuOpen(false)}>Workshops & Seminars</a>
            </ul>
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div id="home" className="relative flex justify-center items-center text-center overflow-hidden h-screen px-4">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${bg9})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 flex flex-col space-y-6 text-white">
          <h1 className="text-lg md:text-2xl">
            Discover a world of opportunities designed to empower mentees through internships, <br className="hidden md:block" />
            workshops, and seminars.
          </h1>
          <p className="text-2xl md:text-4xl font-extrabold">Welcome to Mentees Page</p>
        </div>
      </div>


      {/* Internship Section */}
      <div id="internship" className="pt-20 px-4">
        <div className="text-center space-y-3">
          <h1 className="text-[#382F57] text-3xl md:text-4xl">Internship Opportunities</h1>
          <p className="text-[#858285]">
            Gain practical experience and industry insights through our curated internship programs <br className="hidden md:block" />
            that match your career aspirations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
          {K.INTERNSHIP.map((internship, index) => (
            <div key={index} className="bg-white max-w-sm shadow-lg rounded-xl p-5">
              <img className="w-full h-[200px] object-cover rounded-xl" src={internship.pic} alt="Internship" />
              <h3 className="text-lg text-[#933dc2] font-semibold">{internship.title}</h3>
              <p className="text-[#868488]">{internship.about}</p>
              <p className="text-blue-500 underline">
                <Link to={internship.path}>{internship.link}</Link>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Workshop Section */}
      <div id="workshop" className="bg-[#E0D8EF] w-full pt-20 px-4">
        <div className="text-center space-y-3">
          <h1 className="text-[#382F57] text-3xl md:text-4xl">Empower Your Future: Workshops & Seminars</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 px-4">
          {K.WORKSHOP.map((workshop, index) => (
            <div key={index} className="bg-white max-w-sm shadow-lg rounded-xl p-5">
              <img className="w-full h-[200px] object-cover rounded-xl" src={workshop.img} alt="Workshop" />
              <div className="space-y-3">
                <h3 className="text-lg text-[#933dc2] font-semibold">{workshop.name}</h3>
                <p className="text-[#868488]">{workshop.about}</p>
                <p className="text-blue-500 ">
                  <p>{workshop.link}</p>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Opportunity