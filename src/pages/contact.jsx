import React from 'react';
import { motion } from 'framer-motion';
import bg3 from '../assets/images/bg3.jpg';
import contact from '../assets/images/contacts.jpg';
import { MapPin, Phone, User } from 'lucide-react';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "44810d29-bc2f-43be-8af0-f611e475d343");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 5000);
    } else {
      console.log("Error", data);
      setResult(data.message);
      setTimeout(() => {
        setResult("");
      }, 5000);
    }
  };

  return (
    <div className='space-y-10 2xl:space-y-20 md:space-y-4 lg:space-y-6 xl:space-y-10 pt-2 2xl:pt-16   bg-[#e9deeb] min-h-screen' >

      <h1 style={{ fontFamily: "Playfair" }} className="text-4xl text-center 2xl:text-5xl  hidden md:block" > Get In Touch</h1>

      <div className="flex flex-col bg-transparent lg:flex-row md:flex-row w-full lg:w-[80vw] xl:w-[66vw] 2xl:w-[80vw] md:w-[90vw] 2xl:h-[70vh] md:h-[85vh] h-auto lg:h-[80vh] xl:h-[75vh] mx-auto shadow-xl shadow-gray-500">

        {/* Form Section */}
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center items-center w-[80vw] md:w-full h-[100vh] md:h-full lg:h-full xl:h-full lg:w-1/2 -mt-7 mx-10 px-9 my-5 md:mx-0 md:px-0 lg:mx-0 xl:mx-0 md:-mt-0 lg:-mt-0 xl:-mt-0   bg-[#8874AB]"
        >
          
          <form onSubmit={onSubmit} className="2xl:space-y-16 space-y-5 2xl:mx-10 xl:mx-4 md:mx-5 w-full" >

            {/* Success Message */}
            {result && (
              <p className="border w-full h-11 rounded-lg bg-white shadow-white shadow-md text-[#FB923C] pt-1 font-medium text-center">
                {result}
              </p>
            )}

            <h2 style={{ fontFamily: "Playfair" }} className="text-2xl 2xl:text-4xl pt-1 text-[#F9F6E6] text-center lg:text-left" > Contact Our Team</h2>

            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">

              <div className="w-full">

                <label
                htmlFor="name"className="mb-3 block text-base font-medium 2xl:text-xl text-[#BAD8B6]" >Full Name</label>

                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full name"
                  autoComplete="name"
                  className="w-full rounded-md border border-[#585757] bg-white 2xl:py-7 py-2 px-6 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                />
              </div>

              <div className="w-full">
                <label
                  htmlFor="email" className="mb-3 2xl:text-xl block text-base font-medium text-[#BAD8B6]"> Email Address</label>

                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  autoComplete="email"
                  className="w-full rounded-md border border-[#585757] bg-white 2xl:py-7 py-2 px-6 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
                />
              </div>

            </div>

            <div className="w-full">

              <label htmlFor="phone" className="mb-3 block 2xl:text-xl text-base font-medium text-[#BAD8B6]"> Phone Number</label>

              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Phone number"
                autoComplete="phone"
                className="w-full rounded-md border border-[#585757] bg-white 2xl:py-7 py-2 px-6 text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
              />
            </div>

            <div className="w-full">

              <label htmlFor="message" className="block 2xl:text-xl text-base font-medium text-[#BAD8B6]"> Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="3"
                placeholder="Type here"
                className="w-full rounded-md border border-[#585757] bg-white 2xl:py-7 py-2 px-6 text-base text-[#6B7280] outline-none focus:border-[#715B90] focus:shadow-md"
              ></textarea>
            </div>

            {/* Hidden input for the predefined subject */}
            <input type="hidden" name="subject" value="You have a message" />

            <button style={{ fontFamily: "Playfair" }} className="border border-[#BAD8B6] text-white 2xl:text-xl w-32 lg-w-28 lg:h-8 2xl:h-12 2xl:w-44 xl:w-32 h-9  font-semibold hover:bg-[#DA498D] rounded-lg"type="submit" >
             Submit
            </button>

          </form>

        </motion.div>

        {/* Picture Section */}
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="relative hidden md:block lg:w-1/2"
        >
          <img src={contact} alt="Contact" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#FAC67A] opacity-50"></div>

          <div className="text-black flex flex-col space-y-16 absolute   md:bottom-20 xl:bottom-[6rem] lg:bottom-16 2xl:bottom-60 2xl:left-[24rem] lg:left-32 left-10 md:left-20 xl:left-32 2xl:space-y-32">
            <span className="space-y-2">
              <div className="flex space-x-3">
                <MapPin className="text-[#A35C7A] 2xl:w-10 2xl:h-10" />
                <h1 className="text-lg 2xl:text-3xl">Address</h1>
              </div>
              <p className="pl-6 text-base 2xl:text-2xl">menyinafrica@gmail.com</p>
            </span>

            <div className="space-y-2">
              <div className="flex space-x-3">
                <Phone className="text-[#A35C7A] 2xl:w-10 2xl:h-10" />
                <h1 className="text-lg 2xl:text-3xl">Let's Talk</h1>
              </div>
              <p className="pl-6 text-base 2xl:text-2xl">+233 256 481 007</p>
            </div>

            <div className="space-y-2">
              <div className="flex space-x-3">
                <User className="text-[#A35C7A] 2xl:w-10 2xl:h-10" />
                <h1 className="text-lg 2xl:text-3xl">General Support</h1>
              </div>
              <p className="pl-6 text-base 2xl:text-2xl">seguahafricainitiative@gmail.com</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
